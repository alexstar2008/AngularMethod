"use strict";
var ToDoItem = (function () {
    function ToDoItem(content, done, deadLineMs) {
        this.content = content;
        this.done = done;
        this.deadLineMs = deadLineMs;
    }
    ToDoItem.prototype.setDone = function () {
        this.done = !this.done;
    };
    return ToDoItem;
}());
exports.ToDoItem = ToDoItem;
//# sourceMappingURL=todo.model.js.map