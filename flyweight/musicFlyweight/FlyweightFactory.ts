import { MusicFlyweight } from './MusicFlyweight'

export class FlyweightFactory {
  private static instance: FlyweightFactory = new FlyweightFactory()
  private static musicFlyweightRepository: Map<string, MusicFlyweight> = new Map<string, MusicFlyweight>()

  private constructor() {}

  public static getInstance(): FlyweightFactory {
    return this.instance
  }

  public getMusic(desc: string): MusicFlyweight {
    let music = FlyweightFactory.musicFlyweightRepository.get(desc)

    if(!music) {
      console.log(`Creating a new Flyweight for ${desc}`)
      music = this.getMusicByString(desc)
      FlyweightFactory.musicFlyweightRepository.set(desc, music)
    }

    return music
  }

  private getMusicByString(desc: string): MusicFlyweight {
    const musicData = desc.split(';')
    return new MusicFlyweight(musicData[0], musicData[1], Number(musicData[2]))
  }

  public getSize(): number {
    return FlyweightFactory.musicFlyweightRepository.size
  }
}