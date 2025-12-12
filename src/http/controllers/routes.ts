import { FastifyInstance } from 'fastify' 
import { test } from './test'

export async function testRoutes(app: FastifyInstance) {
  app.get('/test', test)
}