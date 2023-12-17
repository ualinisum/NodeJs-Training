import Book from "./book";

export default interface ShoppingCart {
    addBook(book: Book): void;
    removeBook(book: Book): void;
    viewCart(): Book[];
}