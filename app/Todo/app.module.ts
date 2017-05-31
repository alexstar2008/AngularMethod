import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ListWrapper }   from './app.component';
import { ToDoItemComponent } from './todo.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ListWrapper, ToDoItemComponent],
    bootstrap: [ListWrapper]
})
export class AppModule { }