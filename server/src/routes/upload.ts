import { randomUUID } from "node:crypto";
import { extname, resolve } from "node:path";
import { FastifyInstance } from "fastify";
import { createWriteStream } from "node:fs";
import {pipeline} from 'node:stream'
import {promisify} from 'node:util'

const pump = promisify(pipeline);

export async function UploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request, reply) => {
 const upload = await request.file({
limits: {
    fileSize: 5242880 //5mb
}
 })

 if(!upload){
    return reply.status(400).send()
 }

 const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/

 const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)

 if(!isValidFileFormat){
    return reply.status(400).send()
 }

const fileId = randomUUID()
const extension = extname(upload.filename)

const filename = fileId.concat(extension)

const fileStream = createWriteStream(
   resolve(__dirname, '../../upload' ,  filename),
)

await pump(upload.file, fileStream)

const fullUrl = request.protocol.concat('://').concat(request.hostname)

const fileUrl = new URL(`/upload/${filename}` , fullUrl).toString()
  
return {fileUrl}
});
  
}
