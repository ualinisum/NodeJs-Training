import Book from "./book";

export default interface CartItem {
    book: Book;
    quantity: number;
    price: number;
    subtotal: number;
    discountVoucher: string | number ;
  }