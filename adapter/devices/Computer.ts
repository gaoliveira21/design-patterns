import { HDMI } from "../interfaces/HDMI";

export class Computer {
  private port: HDMI

  constructor(screen: HDMI) {
    console.log('Connecting on HDMI port...')
    this.port = screen
  }

  public sendImageAndSound(image: string, sound: string): void {
    this.port.setImage(image)
    this.port.setSound
  }
}