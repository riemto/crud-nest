export class TodoEntity {
    id: number;
    task: string;
    done: boolean;

    constructor(task: string) {
        this.id = Math.floor(Math.random() * 100000);
        this.task = task;
        this.done = false;
    }
}