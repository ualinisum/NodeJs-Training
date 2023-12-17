import Payment from "./payment";

class CreditCardPayment extends Payment {
    constructor(amount: number, private creditCardNumber: string) {
        super(amount);
        this.creditCardNumber = creditCardNumber;
    }
    processPayment(): void {
        console.log(`Credit card payment of $${this.amount} with card number ${this.creditCardNumber}`);
    }
}