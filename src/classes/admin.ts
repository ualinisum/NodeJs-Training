import Book from "./book";

export default class Admin {
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