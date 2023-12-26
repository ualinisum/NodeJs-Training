import EventEmitter from "events";
import PurchaseDetails from "../interfaces/purchaseDetails";
  
export default class TicketManager extends EventEmitter {
  constructor() {
    super();
  }

  buy(email: string, price: number): void {
    const timeStamp = new Date();
    const purchaseDetails: PurchaseDetails = {
      email,
      price,
      timeStamp,
    };
    this.emit("buy", purchaseDetails);
  }
}

