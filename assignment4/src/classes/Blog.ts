export default class Blog {
    private id: number;
    private title: string;
    private content: string;
    private username: string;
    private views: number;
  
    constructor(id: number, title: string, content: string, username: string, views: number) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.username = username;
      this.views = views;
    }
  
    get getId(): number {
      return this.id;
    }
  
    set setId(value: number) {
      this.id = value;
    }
  
    get getTitle(): string {
      return this.title;
    }
  
    set setTitle(value: string) {
      this.title = value;
    }
  
    get getContent(): string {
      return this.content;
    }
  
    set setContent(value: string) {
      this.content = value;
    }
  
    get getUsername(): string {
      return this.username;
    }
  
    set setUsername(value: string) {
      this.username = value;
    }
  
    get getViews(): number {
      return this.views;
    }
  
    set setViews(value: number) {
      this.views = value;
    }
  }
  