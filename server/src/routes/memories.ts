import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";
import { request } from "http";
import { randomUUID } from "crypto";

export async function memoriesRoutes(app: FastifyInstance) {
  app.get("/memories", async () => {
    const memories = await prisma.memory.findMany({
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

  app.get("/memories/:id", async (request) => {
    //const {id}  = request.params

    const ParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = ParamsSchema.parse(request.params);

    const memory = await prisma.memory.findUniqueOrThrow({
      where: { id },
    });
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
        userId: "71dc4a79-36f2-40c4-a4f5-a81ae5093046"
      },
    });

    return memory;
  });

  app.put("/memories/:id", async (request) => {
    const ParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = ParamsSchema.parse(request.params);
    const bodySchema = z.object({
      contents: z.string().uuid(),
      isPublic: z.coerce.boolean().default(false),
      coverUrl: z.string(),
    });

    const { coverUrl, contents, isPublic } = bodySchema.parse(request.body);

    const memory = await prisma.memory.update({
      where: {id},

        data: {
        contents,
        isPublic,
        coverUrl,
      },
    });

    return memory
  });

  app.delete("/memories/:id", async (request) => {
    const ParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = ParamsSchema.parse(request.params);

    const memory = await prisma.memory.delete({
      where: {
        id,
      },
    });
  });
}
