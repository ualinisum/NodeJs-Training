import Payment from "./payment";

class PayPalPayment extends Payment {
    constructor(amount: number, private email: string) {
        super(amount);
        this.email = email;
    }
    processPayment(): void {
        console.log(`PayPal payment of $${this.amount} with email ${this.email}`);
    }
}