export class Card {
  constructor(
    private userNumber: number,
    private cardNumber: number
  ) {}

  public getUserNumber(): number {
    return this.userNumber
  }

  public setUserNumber(usernumber: number): void {
    this.userNumber = usernumber
  }

  public getCardNumber(): number {
    return this.cardNumber
  }

  public setCardNumber(cardnumber: number): void {
    this.cardNumber = cardnumber
  }

  public toString(): string {
    return `Card [userNumber=${this.userNumber}, cardNumber=${this.cardNumber}]`
  }
}