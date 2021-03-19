export class Address {
  constructor(
    public street: string,
    public number: number
  ){}

  public toString(): string {
    return `Address [street=${this.street}, number=${this.number}]`
  }

  public clone(): Address {
    const clonedAddress = { ...this }
    return clonedAddress
  }
}