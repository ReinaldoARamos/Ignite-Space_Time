import fastify, { FastifyInstance } from "fastify";
import z from 'zod'
export async function AuthRoutes(app: FastifyInstance) {
    app.post('/register', async (request) => {
            const bodySchema  = z.object({
                code: z.string()
            })

            const {code} = bodySchema.parse(request.body)
    }) 
}