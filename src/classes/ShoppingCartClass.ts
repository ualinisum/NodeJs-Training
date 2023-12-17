import CartItem from "./CartItem";

export default class ShoppingCart<T extends CartItem> {
    private cartItems: T[] = [];

    addItem(item: T): void {
        this.cartItems.push(item);
    }

    removeItem(item: T): void {
        const index = this.cartItems.indexOf(item);
        if (index !== -1) {
            this.cartItems.splice(index, 1);
        } else {
            console.log(`${item.book} not found in the cart.`);
        }
    }

    calculateTotalPrice(): number {
        return this.cartItems.reduce((total, item) => total + item.price, 0);
    }

    displayCart(): void {
        if (this.cartItems.length === 0) {
            console.log('The cart is empty.');
        } else {
            this.cartItems.forEach(item => {
                console.log(`${item.book}: $${item.price}`);
            });
            console.log(`Total Price: $${this.calculateTotalPrice()}`);
        }
    }
}