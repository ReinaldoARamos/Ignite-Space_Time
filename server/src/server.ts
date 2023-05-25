import fastify from "fastify";
import cors  from '@fastify/cors'
import { memoriesRoutes } from "./routes/memories";
//import  'dotenv/config',
import jwt from '@fastify/jwt' //um token gerado que na verdade é um JSON criptogragado 
import { AuthRoutes } from "./routes/auth";
import multipart from "@fastify/multipart";
import { UploadRoutes } from "./routes/upload";

 const app = fastify()
 app.register(multipart)
 app.register(cors, {
   origin: true  //serve para que quando há valores como boolean ele consiga interpretar
 })

 app.register(jwt, {
  secret: 'spacetime', //diferencia os tokens e os jtw gerados pelo back end
  //de outros jtw gerados por outros backends
 })

 
app.register(memoriesRoutes)
app.register(UploadRoutes)
app.register(AuthRoutes)
 app.listen({
    
    port: 3333,
    
 }).then(() => {
    console.log("😁http server running on  localhost:3333")
 })

 //registros de rotas e o applisten da da porta do servidor