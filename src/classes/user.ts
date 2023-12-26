export default class User {

    constructor(
        private name: string, 
        private email: string, 
        private address: string,
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

    get Username(): string {
        return this.username;
    }
    set Username(newUsername: string) {
        this.username = newUsername;
    }

    get Password(): string {
        return this.password;
    }
    set Password(newPassword: string) {
        this.password = newPassword;
    }


    login(username: string, password: string): void {
        if (username === this.username && password === this.password) {
            this.isLoggedIn = true;
            console.log(`User ${this.username} logged in.`);
        } else if(username !== this.username){
            console.log("Invalid username.");
        }
        else if(password !== this.password){
            console.log("Invalid Password.");
        }
    }

    logout(): void {
        this.isLoggedIn = false;
        console.log(`User ${this.username} logged out successfully.`);
    }
}
