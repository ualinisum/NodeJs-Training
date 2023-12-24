const TicketManager = require("./classes/TicketManager");
const Invoice = require("./classes/Invoice");

function main() {
  const ticketManager = new TicketManager();
  const invoice = new Invoice(ticketManager);

  ticketManager.buy("ukkasha.ali2k@gmail.com", 300);
  invoice;
}