import { Certificate } from './Certificate'

export class BrazilianCertificate implements Certificate {
  public applyCertification(): string {
    return "\t- Calibrating Brasilian rules\n\t- Applying Anatel's Stamp"
  }
}