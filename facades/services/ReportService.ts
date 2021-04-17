import { Card } from '../models/Card'
import { RegisterService } from './RegisterService'

export class ReportService {
  constructor(
    private registerService: RegisterService
  ) { }

  public getSumary(card: Card): void {
    const registers = this.registerService.getRegisterByCard(card)

    for (const register of registers) {
      console.log(`${register.getStoreName()} ${register.getValue().toFixed(2)} ${register.getDate().toString()}`)
    }
  }
}