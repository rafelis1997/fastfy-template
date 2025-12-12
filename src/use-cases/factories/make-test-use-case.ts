import { InMemoryTestRepository } from "@/repositories/in-memory/in-memory-test-repository";
import { TestUseCase } from "../test-use-case";

export function makeTestUseCase() {
  const inMemoryTestRepository = new InMemoryTestRepository()
  const useCase = new TestUseCase(inMemoryTestRepository)

  return useCase
}