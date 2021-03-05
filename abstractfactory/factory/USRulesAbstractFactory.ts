import { Certificate } from '../models/certificate/Certificate';
import { USCertificate } from '../models/certificate/USCertificate';
import { Packing } from '../models/packing/Packing';
import { USPacking } from '../models/packing/USPacking';
import { CountryRulesAbstractFactory } from './CountryRulesAbstractFactory'

export class USRulesAbstractFactory implements CountryRulesAbstractFactory {
  public getCertificates(): Certificate {
    return new USCertificate()
  }

  public getPacking(): Packing {
    return new USPacking()
  }
}
