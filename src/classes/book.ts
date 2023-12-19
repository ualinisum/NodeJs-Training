export enum BookGenre {
    Fiction = "Fiction",
    NonFiction = "Non-fiction",
    Mystery = "Mystery",
    ScienceFiction = "Science Fiction",
    Romance = "Romance",
}

export default class Book {
    constructor(
        private title: string, 
        private author: string, 
        private genre: BookGenre, 
        private price: number, 
        private coverImage = "",
        private description = "",
        private rating = 0,) {
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

    get Genre(): BookGenre {
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

    get CoverImage(): string {
        return this.coverImage;
    }
    set CoverImage(newCoverImage: string) {
        this.coverImage = newCoverImage;
    }

    get Description(): string {
        return this.description;
    }
    set Description(newDescription: string) {
        this.description = newDescription;
    }

    get Rating(): number {
        return this.rating;
    }
    set Rating(newRating: number) {
        this.rating = newRating;
    }

    displayDetails(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Price: $${this.price}`);
        console.log(`CoverImage: $${this.coverImage}`);
        console.log(`Description: $${this.description}`);
        console.log(`Rating: $${this.rating}`);
    }
}
