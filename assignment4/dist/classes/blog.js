"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Blog {
    constructor(id, title, content, username, views) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.username = username;
        this.views = views;
    }
    get getId() {
        return this.id;
    }
    set setId(value) {
        this.id = value;
    }
    get getTitle() {
        return this.title;
    }
    set setTitle(value) {
        this.title = value;
    }
    get getContent() {
        return this.content;
    }
    set setContent(value) {
        this.content = value;
    }
    get getUsername() {
        return this.username;
    }
    set setUsername(value) {
        this.username = value;
    }
    get getViews() {
        return this.views;
    }
    set setViews(value) {
        this.views = value;
    }
}
exports.default = Blog;
