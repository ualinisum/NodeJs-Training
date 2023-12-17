import Book from "./book";
import ShoppingCart from "./shoppingCart";

class UserShoppingCart implements ShoppingCart {
    private cart: Book[] = [];

    addBook(book: Book): void {
        this.cart.push(book);
        console.log(`${book.Title} added to the cart.`);
    }

    removeBook(book: Book): void {
        const index = this.cart.indexOf(book);
        if (index !== -1) {
            this.cart.splice(index, 1);
            console.log(`${book.Title} removed from the cart.`);
        } else {
            console.log(`${book.Title} not found in the cart.`);
        }
    }

    viewCart(): Book[] {
        return this.cart;
    }
}