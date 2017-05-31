import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'user-form',
    templateUrl: 'app/Form/user-form.component.html'
})
export class UserFormComponent {
    model: User;
    form: any;
    submit: boolean;
    constructor() {
        this.model = new User('','',"");
    }
    onSubmit(event: any, form: NgForm): void {
        this.form = form;
        let json = JSON.stringify(this.form.value);
        console.log(json);
        event.preventDefault();
        form.reset();
    }
}