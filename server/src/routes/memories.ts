import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";


export async function memoriesRoutes(app: FastifyInstance) {
    app.get('/memories', async () => {
       const memories = await prisma.memory.findMany({
        orderBy: {
            created_at: 'asc'
        }
       })
       
       return memories.map((memory) => {
         return {
            id: memory.id,
            coverUrl: memory.coverUrl,
            excerpt: memory.contents.substring(0, 115).concat('...')
         }
       })
    })

    app.post('/memories', async () => {
        const memories = await prisma.memory
     })

     app.put('/memories/:id', async () => {
        const memories = await prisma.memory
     })

     app.delete('/memories/:id', async () => {
        const memories = await prisma.memory
     })

}

