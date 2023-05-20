import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import 'dotenv/config'
import { authRoutes } from './routes/auth'

// HTTP Method: GET, POST, PUT, PATCH, DELETE

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(jwt, {
 secret: 'spacetime',
})
app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
