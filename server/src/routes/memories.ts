import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";
import { request } from "http";
import { randomUUID } from "crypto";

export async function memoriesRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify(); //antes de execugtar o handler verificar se o user está logado
  });

  app.get("/memories", async (request) => {
    console.log(request.user.sub);
    const memories = await prisma.memory.findMany({
      where: {
        userId: request.user.sub,
      },
      orderBy: {
        created_at: "asc",
      },
    });

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.contents.substring(0, 115).concat("..."),
      };
    });
  });

  app.get("/memories/:id", async (request, reply) => {
    //const {id}  = request.params

    const ParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = ParamsSchema.parse(request.params);

    const memory = await prisma.memory.findUniqueOrThrow({
      where: { id },
    });

    if (!memory.isPublic && memory.userId !== request.user.sub){
        return reply.status(401).send()
    }
    return memory;
  });

  app.post("/memories", async (request) => {
    const bodySchema = z.object({
      contents: z.string(),
      isPublic: z.coerce.boolean().default(false),
      coverUrl: z.string(),
    });

    const { coverUrl, contents, isPublic } = bodySchema.parse(request.body);

    const memory = await prisma.memory.create({
      data: {
        contents,
        coverUrl,
        isPublic,
        userId: request.user.sub,
      },
    });

    return memory;
  });

  app.put("/memories/:id", async (request, reply) => {


    const ParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = ParamsSchema.parse(request.params);
    const bodySchema = z.object({
      contents: z.string(),
      isPublic: z.coerce.boolean().default(false),
      coverUrl: z.string(),
    });

    const { coverUrl, contents, isPublic } = bodySchema.parse(request.body)

    let memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id, 
      }
    })

    if (memory.userId != request.user.sub){
      return reply.status(401).send()
    } 

     memory = await prisma.memory.update({
      where: { id },

      data: {
        contents,
        isPublic,
        coverUrl,
      },
    });

    return memory;
  });

  app.delete("/memories/:id", async (request, reply) => {
    const ParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = ParamsSchema.parse(request.params);

    
    let memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id, 
      }
    })

    if (memory.userId != request.user.sub){
      return reply.status(401).send()
    } 

     memory = await prisma.memory.delete({
      where: {
        id,
      },
    });
  });
}
