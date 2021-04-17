import { Card } from '../models/Card'

export class CardService {
  private memory = new Map<number, Card>()

  constructor() {
    this.memory.set(0, new Card(0, 424242))
  }

  public getCardByUser(user: number): Card | undefined {
    return this.memory.get(user)
  }

  public removeCard(card: Card): void {
    this.memory.delete(card.getUserNumber())
  }

  public createNewCard(user: number, cardNumber: number): Card {
    const newCard = new Card(user, cardNumber)
    this.memory.set(user, newCard)
    console.log('Creating the new card', newCard.toString())

    return newCard
  }
}