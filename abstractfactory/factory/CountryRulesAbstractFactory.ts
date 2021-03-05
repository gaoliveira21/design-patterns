import { Certificate } from "../models/certificate/Certificate";
import { Packing } from "../models/packing/Packing";

export interface CountryRulesAbstractFactory {
  getCertificates: () => Certificate;
  getPacking: () => Packing;
}