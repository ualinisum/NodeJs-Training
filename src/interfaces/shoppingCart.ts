import Book from "../classes/book";

export default interface ShoppingCart {
    addBook(book: Book): void;
    removeBook(book: Book): void;
    viewCart(): Book[];
}