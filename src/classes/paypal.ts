import Payment from "./payment";

class PayPalPayment extends Payment {
    constructor(private amount: number, private email: string) {
        super();
    }
    processPayment(): void {
        console.log(`PayPal payment of $${this.amount} with email ${this.email}`);
    }
}