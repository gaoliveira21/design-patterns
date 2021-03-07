export class Connection {
  constructor(private inUse: boolean = false){}

  public query(sql: string): void {
    console.log(`Running '${sql}'`)
  }

  public isInUse(): boolean {
    return this.inUse
  }

  public setInUse(status: boolean): void {
    this.inUse = status
  }
}