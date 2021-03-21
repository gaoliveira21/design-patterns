import { OldMonitor } from "../devices/OldMonitor";
import { HDMI } from "../interfaces/HDMI";

export class HDMIToOldMonitorAdapter extends OldMonitor implements HDMI {
  constructor() {
    super()
    console.log("Wrapping the VGA's OldMonitor's Interface with a HDMI adapter...")
  }

  public setImage(image: string): void {
    console.log('Converting the image from HDMI to VGA')
    super.setImage(image)
  }

  public setSound(_: string): void {
    console.log('Sorry, We don`t work with sound')
  }
}