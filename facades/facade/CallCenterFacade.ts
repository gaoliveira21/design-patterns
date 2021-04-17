import { Card } from '../models/Card'
import { CardService } from '../services/CardService'
import { RegisterService } from '../services/RegisterService'
import { ReportService } from '../services/ReportService'

export class CallCenterFacade {
  private cardService = new CardService()
  private registerService = new RegisterService()
  private reportService = new ReportService(this.registerService)

  public getCardByUser(user: number): Card | undefined {
    const card = this.cardService.getCardByUser(user)

    return card
  }

  public getSumary(card: Card): void {
    this.reportService.getSumary(card)
  }
}