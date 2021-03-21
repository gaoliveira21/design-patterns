import { HDMI } from "../interfaces/HDMI";
import { VGA } from "../interfaces/VGA";

export class HDMIToVGAAdapter implements HDMI {
  private vga: VGA

  constructor(vga: VGA) {
    console.log('Conecting the HDMI/VGA adapter...')
    this.vga = vga
  }

  public setImage(image: string): void {
    console.log('Converting the image from HDMI to VGA"')
    this.vga.setImage(image)
  }

  public setSound(_: string): void {
    console.log('Sorry, We don`t work with sound')
  }
}