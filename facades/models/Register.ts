export class Register {
  constructor(
    private storeName: string,
    private value: number,
    private date: Date
  ) {}

  public getStoreName(): string {
    return this.storeName
  }

  public setStoreName(storeName: string): void {
    this.storeName = storeName
  }

  public getValue(): number {
    return this.value
  }

  public setValue(value: number): void {
    this.value = value
  }

  public getDate(): Date {
    return this.date
  }

  public setDate(date: Date): void {
    this.date = date
  }

  public toString(): string {
    return `Register [storeName=${this.storeName}, value=${this.value}, date=${this.date.toISOString()}]`;
  }
}