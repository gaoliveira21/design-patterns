import { Packing } from './Packing'

export class USPacking implements Packing {
  public pack(): string {
    return '\t- Packing in English';
  }
}
