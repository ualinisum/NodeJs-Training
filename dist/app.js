"use strict";
class Book {
    constructor(title, author, genre, price) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
    }
    get Title() {
        return this.title;
    }
    set Title(newTitle) {
        this.title = newTitle;
    }
    get Author() {
        return this.author;
    }
    set Author(newAuthor) {
        this.author = newAuthor;
    }
    get Genre() {
        return this.genre;
    }
    set Genre(newGenre) {
        this.genre = newGenre;
    }
    get Price() {
        return this.price;
    }
    set Price(newPrice) {
        this.price = newPrice;
    }
    displayDetails() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Price: $${this.price}`);
    }
}
class User {
    constructor(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }
    get Name() {
        return this.name;
    }
    set Name(newName) {
        this.name = newName;
    }
    get Email() {
        return this.email;
    }
    set Email(newEmail) {
        this.email = newEmail;
    }
    get Address() {
        return this.address;
    }
    set Address(newAddress) {
        this.address = newAddress;
    }
}
class Ebook extends Book {
    constructor(title, author, genre, price, format) {
        super(title, author, genre, price);
        this.format = format;
    }
    get Format() {
        return this.format;
    }
    set Format(newFormat) {
        this.format = newFormat;
    }
}
class Payment {
    constructor(amount) {
        this.amount = amount;
        this.amount = amount;
    }
}
class CreditCardPayment extends Payment {
    constructor(amount, creditCardNumber) {
        super(amount);
        this.creditCardNumber = creditCardNumber;
        this.creditCardNumber = creditCardNumber;
    }
    processPayment() {
        console.log(`Credit card payment of $${this.amount} with card number ${this.creditCardNumber}`);
    }
}
class PayPalPayment extends Payment {
    constructor(amount, email) {
        super(amount);
        this.email = email;
        this.email = email;
    }
    processPayment() {
        console.log(`PayPal payment of $${this.amount} with email ${this.email}`);
    }
}
class UserShoppingCart {
    constructor() {
        this.cart = [];
    }
    addBook(book) {
        this.cart.push(book);
        console.log(`${book.Title} added to the cart.`);
    }
    removeBook(book) {
        const index = this.cart.indexOf(book);
        if (index !== -1) {
            this.cart.splice(index, 1);
            console.log(`${book.Title} removed from the cart.`);
        }
        else {
            console.log(`${book.Title} not found in the cart.`);
        }
    }
    viewCart() {
        return this.cart;
    }
}
class Admin {
    constructor() {
        this.booksInventory = [];
    }
    addBook(book) {
        this.booksInventory.push(book);
        console.log(`${book.Title} added to the inventory.`);
    }
    updateBook(existingBook, newBook) {
        const index = this.booksInventory.indexOf(existingBook);
        if (index !== -1) {
            this.booksInventory[index] = newBook;
            console.log(`${existingBook.Title} updated in the inventory.`);
        }
        else {
            console.log(`${existingBook.Title} not found in the inventory.`);
        }
    }
    deleteBook(book) {
        const index = this.booksInventory.indexOf(book);
        if (index !== -1) {
            this.booksInventory.splice(index, 1);
            console.log(`${book.Title} deleted from the inventory.`);
        }
        else {
            console.log(`${book.Title} not found in the inventory.`);
        }
    }
    viewInventory() {
        return this.booksInventory;
    }
}
//# sourceMappingURL=app.js.map