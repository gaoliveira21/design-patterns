import { CountryRulesAbstractFactory } from "../../factory/CountryRulesAbstractFactory"

export abstract class IPhone {

  constructor(private rules: CountryRulesAbstractFactory) {}

  public abstract getHardware(): void;

  public assemble(): void {
    console.log("Assembling all the hardwares")
  }

  public certificates(): void {
    console.log("Testing all the certificates")
    console.log(this.rules.getCertificates().applyCertification())
  }

  public pack(): void {
  console.log("Packing the device")
  console.log(this.rules.getPacking().pack())
  }
}