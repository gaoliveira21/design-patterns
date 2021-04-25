import { Music } from '../models/Music'
import { FlyweightFactory } from '../musicFlyweight/FlyweightFactory'

export class MusicService {
  private memory: Map<string, Map<string, Music>> = new Map()

  public listenMusic(user: string, desc: string): void {
    let userPlaylist = this.memory.get(user)

    if (!userPlaylist) {
      userPlaylist = new Map()
      this.memory.set(user, userPlaylist)
    }

    let song = userPlaylist.get(desc)

    if (!song) {
      song = new Music(FlyweightFactory.getInstance().getMusic(desc))
      userPlaylist.set(desc, song)
    }

    console.log(`${user} is listening ${song.getMusicFlyweight().getName()}`)
    song.listening()
  }

  public report(): void {
    const users = this.memory.keys()

    for (const user of users) {
      let timeCouter = 0
      console.log('----------')
      console.log(`${user} has listen...`)
      const musics = this.memory.get(user)?.values() ?? []

      for (const music of musics) {
        const musicFlyweight = music.getMusicFlyweight()

        console.log(`${musicFlyweight.getArtist()} ${musicFlyweight.getName()} ${music.getPlayerQty()} times`)

        timeCouter += (music.getPlayerQty() * music.getMusicFlyweight().getDurationInSeconds());
      }

      console.log(`${user} has listen music for ${timeCouter} seconds`)
    }
    console.log(`Total of musics in flyweight's memory ${FlyweightFactory.getInstance().getSize()}`)
  }
}