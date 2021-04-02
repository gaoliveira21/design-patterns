export class User {
  constructor(
    private name: string,
    private email: string,
    private password: string
  ) {}

  public getName(): string {
    return this.name
  }

  public getEmail(): string {
    return this.email
  }

  public getPassword(): string {
    return this.password
  }

  public toString(): string {
    return `User [name=${this.name}, email=${this.email}, password=${this.password}]`
  }
}