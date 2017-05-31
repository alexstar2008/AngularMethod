import { Component, Input } from '@angular/core';
import { ToDoItem } from './todo.model';

@Component({
    selector: 'todo',
    host: {
        class:'row'
    },
    template: `
            <tr (click) = "setDone()" >
                <td>{{ toDo.content }}</td>
            </tr>
    `
})

export class ToDoItemComponent {
    @Input() toDo: ToDoItem;

    setDone(): boolean {
        this.toDo.setDone();
        return false;
    }

}