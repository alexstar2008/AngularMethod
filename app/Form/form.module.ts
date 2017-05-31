import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { FormComponent }  from './form.component';
import { UserFormComponent } from './user-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        FormComponent,
        UserFormComponent
    ],
    bootstrap: [FormComponent]
})
export class FormModule { }