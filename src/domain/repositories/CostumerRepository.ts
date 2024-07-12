import { Costumer } from "../entites/Costumer";

export interface CostumerRepository {
  findById(id: string): Promise<Costumer | null | undefined>;
}
