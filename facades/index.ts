import { CallCenterFacade } from './facade/CallCenterFacade'

const facade = new CallCenterFacade()

const card = facade.getCardByUser(0);
console.log(card)


if(card) {
  facade.getSumary(card)
}
