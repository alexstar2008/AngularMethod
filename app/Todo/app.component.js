"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var todo_model_1 = require("./todo.model");
var itemsFilter_service_1 = require("./itemsFilter.service");
var ListWrapper = (function () {
    function ListWrapper(itemsFilter) {
        this.itemsFilter = itemsFilter;
        this.todos = [new todo_model_1.ToDoItem('hack life', false, 200)];
    }
    ListWrapper.prototype.removeFinished = function () {
        this.todos = this.itemsFilter.filterDoneItems(this.todos);
    };
    ListWrapper.prototype.addToDoItem = function () {
        this.todos.push(new todo_model_1.ToDoItem(this.content, false, 100));
    };
    return ListWrapper;
}());
ListWrapper = __decorate([
    core_1.Component({
        selector: 'todo-lists',
        providers: [itemsFilter_service_1.ItemsFilter],
        template: "\n        <div \u0441lass=\"containter\">\n            <h1 class=\"text-center\">ToDo App</h1>\n            <div class=\"row\">\n                <div class=\"col-md-4 col-md-offset-4\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" [(ngModel)]=\"content\" (keyup.enter)=\"addToDoItem()\" class=\"form-control\" />\n                    </div>\n                    <button (click)=\"addToDoItem()\" class=\"btn btn-info\">Add Task</button>\n                    <button (click)=\"removeFinished()\" class=\"btn btn-danger\">Remove finished tasks</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4 col-md-offset-4\">\n                    <table class=\"table\">\n                        <todo *ngFor=\"let item of (todos    );\" [toDo] = \"item\" [class.done_task]=\"item.done\"></todo>\n                    </table>\n                </div>\n            </div>\n        </div>\n        \n    ",
        styles: [
            "\n        td{\n            text-decoration:none;\n            cursor:pointer;\n        }\n        .done_task{\n            text-decoration: line-through !important;\n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [itemsFilter_service_1.ItemsFilter])
], ListWrapper);
exports.ListWrapper = ListWrapper;
//# sourceMappingURL=app.component.js.map