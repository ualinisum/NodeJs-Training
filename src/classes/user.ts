export default class User {

    constructor(private name: string, private email: string, private address: string,
        private username: string,
        private password: string,
        private isLoggedIn: boolean = false) {
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

    login(username: string, password: string): void {
        if (username === this.username && password === this.password) {
            this.isLoggedIn = true;
            console.log(`User ${this.username} logged in.`);
        } else {
            console.log("Invalid username or password.");
        }
    }

    logout(): void {
        this.isLoggedIn = false;
        console.log(`User ${this.username} logged out.`);
    }
}
