class Book {
    constructor(protected title: string, protected author: string, protected genre: string, protected price: number) {
    }

    get Title(): string {
        return this.title;
    }
    set Title(newTitle: string) {
        this.title = newTitle;
    }

    get Author(): string {
        return this.author;
    }
    set Author(newAuthor: string) {
        this.author = newAuthor;
    }

    get Genre(): string {
        return this.genre;
    }
    set Genre(newGenre: string) {
        this.genre = newGenre;
    }

    get Price(): number {
        return this.price;
    }
    set Price(newPrice: number) {
        this.price = newPrice;
    }

    displayDetails(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Price: $${this.price}`);
    }
}

class User {

    constructor(private name: string, private email: string, private address: string) {
    }

    get Name(): string {
        return this.name;
    }
    set Name(newName: string) {
        this.name = newName;
    }

    get Email(): string {
        return this.email;
    }
    set Email(newEmail: string) {
        this.email = newEmail;
    }

    get Address(): string {
        return this.address;
    }
    set Address(newAddress: string) {
        this.address = newAddress;
    }
}

class Ebook extends Book {

    constructor(title: string, author: string, genre: string, price: number, private format: string) {
        super(title, author, genre, price);
    }

    get Format(): string {
        return this.format;
    }

    set Format(newFormat: string) {
        this.format = newFormat;
    }
}

abstract class Payment {
    constructor(protected amount: number) {
        this.amount = amount;
    }
    abstract processPayment(): void ;
}

class CreditCardPayment extends Payment {
    constructor(amount: number, private creditCardNumber: string) {
        super(amount);
        this.creditCardNumber = creditCardNumber;
    }
    processPayment(): void {
        console.log(`Credit card payment of $${this.amount} with card number ${this.creditCardNumber}`);
    }
}

class PayPalPayment extends Payment {
    constructor(amount: number, private email: string) {
        super(amount);
        this.email = email;
    }
    processPayment(): void {
        console.log(`PayPal payment of $${this.amount} with email ${this.email}`);
    }
}


interface ShoppingCart {
    addBook(book: Book): void;
    removeBook(book: Book): void;
    viewCart(): Book[];
}

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

class Admin {
    private booksInventory: Book[] = [];

    addBook(book: Book): void {
        this.booksInventory.push(book);
        console.log(`${book.Title} added to the inventory.`);
    }

    updateBook(existingBook: Book, newBook: Book): void {
        const index = this.booksInventory.indexOf(existingBook);
        if (index !== -1) {
            this.booksInventory[index] = newBook;
            console.log(`${existingBook.Title} updated in the inventory.`);
        } else {
            console.log(`${existingBook.Title} not found in the inventory.`);
        }
    }

    deleteBook(book: Book): void {
        const index = this.booksInventory.indexOf(book);
        if (index !== -1) {
            this.booksInventory.splice(index, 1);
            console.log(`${book.Title} deleted from the inventory.`);
        } else {
            console.log(`${book.Title} not found in the inventory.`);
        }
    }

    viewInventory(): Book[] {
        return this.booksInventory;
    }
}