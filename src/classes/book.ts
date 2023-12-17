enum BookGenre {
    Fiction = "Fiction",
    NonFiction = "Non-fiction",
    Mystery = "Mystery",
    ScienceFiction = "Science Fiction",
    Romance = "Romance",
    // Add more genres as needed
}

export default class Book {
    constructor(
        protected title: string, 
        protected author: string, 
        protected genre: BookGenre, 
        protected price: number, 
        protected coverImage = "",
        protected description = "",
        protected rating = 0,) {
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
    set Genre(newGenre: BookGenre) {
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
