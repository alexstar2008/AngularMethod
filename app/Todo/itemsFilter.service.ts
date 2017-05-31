import { Injectable } from '@angular/core';

@Injectable()
export class ItemsFilter {
    filterDoneItems(items: any[]): any[] {
        return items.filter((item) => item.done == false);
    } 
}