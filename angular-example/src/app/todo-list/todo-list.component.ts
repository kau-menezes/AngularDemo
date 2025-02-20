import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AddItemComponent } from "../add-item/add-item.component";
import { Languages, TranslatePipe } from '../translate.pipe';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'todo-list',
  imports: [AddItemComponent, TranslatePipe, TaskComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges, OnDestroy {
  language: Languages = "en";
  items: string[] = [];
  maxPage: number = 1;
  selectedItems: string[] = [];

  @Input()
  currentPage: number = 1;

  ngOnDestroy(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPage']) {
      this.updateSelectedItems();
    }
  }

  ngOnInit(): void {
    this.updateSelectedItems();
  }

  updateSelectedItems(): void {
    let start = (this.currentPage - 1) * 5;
    let end = start + 5;

    this.selectedItems = [];
    for (let i = start; i < end && i < this.items.length; i++) {
      this.selectedItems.push(this.items[i]);
    }

    console.log(this.items);
    console.log(this.selectedItems);
  }

  receiveNewItem(newItem: string) {
    this.items.push(newItem);
    this.maxPage = Math.ceil(this.items.length / 5);

    // If the new item was added beyond the current page, update the page
    if ( this.selectedItems.length == 5) {
      this.currentPage = this.maxPage;  // Go to the last page
    }

    this.updateSelectedItems();  // Recalculate the displayed tasks

    console.log("item add: "+newItem);
    console.log("selected items: "+this.selectedItems);
    
  }
}
