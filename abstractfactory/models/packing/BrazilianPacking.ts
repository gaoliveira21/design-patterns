import { Packing } from './Packing'

export class BrazilianPacking implements Packing {
  public pack(): string {
    return '\t- Empacotando em Portugues';
  }
}
