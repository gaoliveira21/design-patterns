export class MusicFlyweight {
  constructor(
    private name: string,
    private artist: string,
    private durationInSeconds: number
  ) {}

  public getName(): string {
    return this.name
  }

  public getArtist(): string {
    return this.artist
  }

  public getDurationInSeconds(): number {
    return this.durationInSeconds
  }

  public toString(): string {
    return `MusicFly [name=${this.name}, artist=${this.artist}, durationInSeconds=${this.durationInSeconds}]`
  }
}