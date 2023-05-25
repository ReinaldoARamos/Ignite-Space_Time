import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient( {
    log: ['query']
})

//faz o import do prisma para nao ter que fazer varios requires