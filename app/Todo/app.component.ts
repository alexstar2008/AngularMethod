import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';


import { ToDoItem } from './todo.model';

import { ItemsFilter } from './itemsFilter.service';


@Component({
    selector: 'todo-lists',
    providers: [ItemsFilter],
    template: `
        <div сlass="containter">
            <h1 class="text-center">ToDo App</h1>
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div class="form-group">
                        <input type="text" [(ngModel)]="content" (keyup.enter)="addToDoItem()" class="form-control" />
                    </div>
                    <button (click)="addToDoItem()" class="btn btn-info">Add Task</button>
                    <button (click)="removeFinished()" class="btn btn-danger">Remove finished tasks</button>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <table class="table">
                        <todo *ngFor="let item of (todos    );" [toDo] = "item" [class.done_task]="item.done"></todo>
                    </table>
                </div>
            </div>
        </div>
        
    `,
    styles: [
        `
        td{
            text-decoration:none;
            cursor:pointer;
        }
        .done_task{
            text-decoration: line-through !important;
        }
        `
    ]
})

export class ListWrapper {
    todos: ToDoItem[];

    content: string;
    constructor(private itemsFilter: ItemsFilter) {
        this.todos = [new ToDoItem('hack life', false, 200)];
    }
    removeFinished(): void{
        this.todos = this.itemsFilter.filterDoneItems(this.todos);
    }
    addToDoItem() {
        this.todos.push(new ToDoItem(this.content,false,100));
    }

}
 