import Payment from "./payment";

export default class CreditCardPayment extends Payment {
    constructor(private amount: number, private creditCardNumber: string | number) {
        super();
    }
    processPayment(): void {
        console.log(`Credit card payment of $${this.amount} with card number ${this.creditCardNumber}`);
    }
}