import { TestRepository } from "../test-repository";

export class InMemoryTestRepository implements TestRepository {
  public items: string = "test"

  test(): string {
    return this.items
  }

}