export default abstract class Payment {
    constructor(protected amount: number) {
        this.amount = amount;
    }
    abstract processPayment(): void ;
}