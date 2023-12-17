import Book from "./book";

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