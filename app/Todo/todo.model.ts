export class ToDoItem {
    content: string;
    done: boolean;
    deadLineMs: number;

    constructor(content: string, done: boolean, deadLineMs: number) {
        this.content = content;
        this.done = done;
        this.deadLineMs = deadLineMs;
    }
    setDone(): void {
        this.done = !this.done;
    }
}