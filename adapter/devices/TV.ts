import { HDMI } from "../interfaces/HDMI";

export class TV implements HDMI {
  public setImage(image: string): void {
    console.log(`>>> This is your video: ${image}`)
  }

  public setSound(sound: string): void {
    console.log(`>>> This is your sound: ${sound}`)
  }
}