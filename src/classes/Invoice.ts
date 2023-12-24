const TicketManager = require("./TicketManager");
import PurchaseDetails from "../interfaces/purchaseDetails";

class Invoice {
  constructor(ticketManager: typeof TicketManager) {
    ticketManager.on("buy", (purchaseDetails: PurchaseDetails) => {
      console.log("Invoice details:");
      console.log("Buyer Email:", purchaseDetails.email);
      console.log("Ticket Price:", purchaseDetails.price);
      console.log("Timestamp:", purchaseDetails.timeStamp);
    });
  }
}

module.exports = Invoice;
