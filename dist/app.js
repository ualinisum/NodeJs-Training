"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_1 = __importDefault(require("./classes/Invoice"));
const TicketManager_1 = __importDefault(require("./classes/TicketManager"));
function main() {
    const ticketManager = new TicketManager_1.default();
    const invoice = new Invoice_1.default(ticketManager);
    ticketManager.buy("ukkasha.ali2k@gmail.com", 300);
}
main();
//# sourceMappingURL=app.js.map