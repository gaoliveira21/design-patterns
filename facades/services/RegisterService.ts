import { Card } from '../models/Card'
import { Register } from '../models/Register'

export class RegisterService {
  private memory = new Map<number, Register[]>()

  constructor() {
    this.memory.set(424242, [
      new Register("McDonalds", 15, new Date()),
      new Register("Pizza Hut", 25, new Date()),
      new Register("Nike Store", 50, new Date())
    ])
  }

  public getRegisterByCard(card: Card): Register[] {
    return this.memory.get(card.getCardNumber()) ?? []
  }

  public deleteCardRegistrers(card: Card): void {
    this.memory.delete(card.getCardNumber())
  }

  public addCardRegisters(card: Card, registers: Register[]): void {
    const oldRegisters = this.getRegisterByCard(card)

    this.memory.set(card.getCardNumber(), [...oldRegisters, ...registers])
  }
}