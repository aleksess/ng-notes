

export class Note {
    public content: string;
    constructor(c: string = "") {
        this.content = c;
    }

    public save(c: string) {
        this.content = c;
    }

    public getContent() {
        return this.content;
    }

}
