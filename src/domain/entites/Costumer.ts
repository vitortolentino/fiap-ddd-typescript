export class Costumer {
  constructor(public id: string, public name: Name) {}
}

class Name {
  private constructor(private name: string) {}

  public create(name: string) {
    if (this.name === undefined) {
      throw new Error("Name não informado");
    }

    if (this.name === undefined) {
      throw new Error("Name não informado");
    }

    return new Name(name);
  }
}
