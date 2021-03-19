import { Address } from './Address';

export class User {
  constructor(
    public name: string,
    public age: number,
    public address: Address
  ){}

  public toString(): string {
    return `User [name=${this.name}, age=${this.age} address=${this.address}]`
  }

  public clone(): User {
    const clonedUser = { ...this }
    clonedUser.address = clonedUser.address.clone()

    return clonedUser
  }
}