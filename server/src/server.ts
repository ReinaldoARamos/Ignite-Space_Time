import fastify from "fastify";
import cors  from '@fastify/cors'
import { memoriesRoutes } from "./routes/memories";
//import  'dotenv/config',
import jwt from '@fastify/jwt'
import { AuthRoutes } from "./routes/auth";

 const app = fastify()
 app.register(cors, {
   origin: true
 })

 app.register(jwt, {
  secret: 'spacetime', //diferencia os tokens e os jtw gerados pelo back end
  //de outros jtw gerados por outros backends
 })

 
app.register(memoriesRoutes)
app.register(AuthRoutes)
 app.listen({
    
    port: 3333,
    
 }).then(() => {
    console.log("😁http server running on  localhost:3333")
 })