import { Costumer } from "../../domain/entites/Costumer";
import { CostumerRepository } from "../../domain/repositories/CostumerRepository";

export class InMemoryCostumerRepository implements CostumerRepository {
  private costumers: Costumer[];

  async findById(id: string): Promise<Costumer | null | undefined> {
    return this.costumers.find((order) => order.id === id);
  }
}

export class PostgresCostumerRepository implements CostumerRepository {
  async findById(id: string): Promise<Costumer | null | undefined> {
    return db.execute('select * from costumers where id =' + id)
  }
}
