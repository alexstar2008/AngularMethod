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
var ToDoItemComponent = (function () {
    function ToDoItemComponent() {
    }
    ToDoItemComponent.prototype.setDone = function () {
        this.toDo.setDone();
        return false;
    };
    return ToDoItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", todo_model_1.ToDoItem)
], ToDoItemComponent.prototype, "toDo", void 0);
ToDoItemComponent = __decorate([
    core_1.Component({
        selector: 'todo',
        host: {
            class: 'row'
        },
        template: "\n            <tr (click) = \"setDone()\" >\n                <td>{{ toDo.content }}</td>\n            </tr>\n    "
    })
], ToDoItemComponent);
exports.ToDoItemComponent = ToDoItemComponent;
//# sourceMappingURL=todo.component.js.map