import PurchaseDetails from "../interfaces/purchaseDetails";
import TicketManager from "./TicketManager";

export default class Invoice {
  constructor(ticketManager: TicketManager) {
    ticketManager.on("buy", (purchaseDetails: PurchaseDetails) => {
      console.log("Invoice details:");
      console.log("Buyer Email:", purchaseDetails.email);
      console.log("Ticket Price:", purchaseDetails.price);
      console.log("Timestamp:", purchaseDetails.timeStamp);
    });
  }
}
