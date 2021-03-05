import { BrazilianCertificate } from '../models/certificate/BrazilianCertificate';
import { Certificate } from '../models/certificate/Certificate';
import { BrazilianPacking } from '../models/packing/BrazilianPacking';
import { Packing } from '../models/packing/Packing';
import { CountryRulesAbstractFactory } from './CountryRulesAbstractFactory'

export class BrazilianRulesAbstractFactory implements CountryRulesAbstractFactory {
  public getCertificates(): Certificate {
    return new BrazilianCertificate()
  }

  public getPacking(): Packing {
    return new BrazilianPacking()
  }
}
