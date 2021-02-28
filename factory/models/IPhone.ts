export abstract class IPhone {
  public abstract getHardware(): void;

  public assemble(): void {
    console.log("Assembling all the hardwares")
  }

  public certificates(): void {
    console.log("Testing all the certificates")
  }

  public pack(): void {
  console.log("Packing the device")   
  }
}