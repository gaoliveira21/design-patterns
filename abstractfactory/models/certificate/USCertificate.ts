import { Certificate } from './Certificate'

export class USCertificate implements Certificate {
  public applyCertification(): string {
    return "\t- Calibrating US rules";
  }
}
