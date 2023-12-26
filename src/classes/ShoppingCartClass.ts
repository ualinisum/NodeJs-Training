import CartItem from "../interfaces/CartItem";

export default class ShoppingCart<T extends CartItem> {
    private cartItems: T[];

    constructor() {
        this.cartItems = [];
    }

    addItem(item: T): void {
        this.cartItems.push(item);
    }

    removeItem(item: T): void {
        const index = this.cartItems.indexOf(item);
        if (index !== -1) {
            console.log(`${this.cartItems.splice(index, 1)} removed from the cart`);
        } else {
            console.log(`${item.book} not found in the cart.`);
        }
    }

    calculateTotalPrice(): number {
        let totalPrice = 0;
        for (const item of this.cartItems) {
            totalPrice += item.subtotal;
        }
        return totalPrice;
    }

    displayCart(): void {
        if (this.cartItems.length === 0) {
            console.log('The cart is empty.');
        } else {
            this.cartItems.forEach(item => {
                console.log(`${item.book}: $${item.subtotal}`);
            });
            console.log(`Total Price: $${this.calculateTotalPrice()}`);
        }
    }
}