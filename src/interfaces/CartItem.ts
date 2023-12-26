import Book from "../classes/book";

export default interface CartItem {
    book: Book;
    quantity: number;
    subtotal: number;
    discountVoucher: string | number ;
}