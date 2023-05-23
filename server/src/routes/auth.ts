import axios from "axios";
import fastify, { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "../lib/prisma";
export async function AuthRoutes(app: FastifyInstance) {
  app.post("/register", async (request) => {
    const bodySchema = z.object({
      code: z.string(),
    });

    const { code } = bodySchema.parse(request.body);

    const acessCodeToken = await axios.post(
      "https://github.com/login/oauth/access_token",
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: "application/json",
        },
      }
    );

    const { access_token } = acessCodeToken.data;

    const userResponse = await axios.get("http://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const userSchema = z.object({
      id: z.number(),
      login: z.string(),
      name: z.string(),
      avatar_url: z.string(),
    });
    const userInfo = userSchema.parse(userResponse.data);

    let user = await prisma.user.findUnique({
      where: {
        gitHubid: userInfo.id,
      },
    });

    if(!user){
        user = await prisma.user.create({
            data: {
                gitHubid: userInfo.id,
                avatarUrl: userInfo.avatar_url,
                login: userInfo.login,
                name: userInfo.name,
                
            }
        })
    }

    const token = app.jwt.sign({
      name: userInfo.name,
      avatar_url: userInfo.avatar_url
    }, {
      sub: user.id,
      expiresIn: '30 days'
    })
    return {
      token,
    };
  });
}
