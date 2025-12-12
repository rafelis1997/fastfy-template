import { ResourceNotFoundError } from '@/use-cases/errors/test-error'
import { makeTestUseCase } from '@/use-cases/factories/make-test-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function test(request: FastifyRequest, reply: FastifyReply) {

  try {
    const testUseCase = makeTestUseCase()

    await testUseCase.execute()
  } catch (error) {
    throw new ResourceNotFoundError()
  }
}