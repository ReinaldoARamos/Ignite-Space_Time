import axios from "axios";
import fastify, { FastifyInstance } from "fastify";
import z from 'zod'
export async function AuthRoutes(app: FastifyInstance) {
    
    app.post('/register', async (request) => {
            const bodySchema  = z.object({
                code: z.string()
            })

            const {code} = bodySchema.parse(request.body)

            const acessCodeToken = await axios.post(
                'https://github.com/login/oauth/acess_token',
                null,
                {
                     params: {
                        client_id : process.env.GITHUB_CLIENT_ID,
                        client_secret : process.env.GITHUB_CLIENT_SECRET,
                        code,


                     },
                     headers: {
                        Accept: 'application/json'
                     }
                }
            )

            const {access_token} = acessCodeToken.data

            return {
                access_token
            }
    }) 
}