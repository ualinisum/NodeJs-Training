import Invoice from "./classes/Invoice";
import TicketManager from "./classes/TicketManager";


function main() {
  const ticketManager = new TicketManager();
  const invoice = new Invoice(ticketManager);

  ticketManager.buy("ukkasha.ali2k@gmail.com", 300);
}
main();