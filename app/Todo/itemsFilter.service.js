"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ItemsFilter = (function () {
    function ItemsFilter() {
    }
    ItemsFilter.prototype.filterDoneItems = function (items) {
        return items.filter(function (item) { return item.done == false; });
    };
    return ItemsFilter;
}());
ItemsFilter = __decorate([
    core_1.Injectable()
], ItemsFilter);
exports.ItemsFilter = ItemsFilter;
//# sourceMappingURL=itemsFilter.service.js.map