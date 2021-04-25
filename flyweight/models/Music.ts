import { MusicFlyweight } from '../musicFlyweight/MusicFlyweight'

export class Music {
  private playerQty: number = 0;

  constructor(
    private musicFlyweight: MusicFlyweight
  ) {}

  public listening(): void {
    this.playerQty++
  }

  public getMusicFlyweight(): MusicFlyweight {
    return this.musicFlyweight
  }

  public setMusicFlyweight(musicFlyweight: MusicFlyweight): void {
    this.musicFlyweight = musicFlyweight
  }

  public getPlayerQty(): number {
    return this.playerQty
  }

  public setPlayerQty(qty: number): void {
    this.playerQty = qty
  }
}