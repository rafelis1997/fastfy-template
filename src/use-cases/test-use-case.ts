import { TestRepository } from "@/repositories/test-repository";

export class TestUseCase {
  constructor(private repository: TestRepository) { }
  
  async execute() {
    return this.repository.test()
  }
}