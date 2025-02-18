import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddItemComponent } from "../add-item/add-item.component";
import { Languages, TranslatePipe } from '../translate.pipe';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'todo-list',
  imports: [AddItemComponent, TranslatePipe, TaskComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit, OnChanges, OnDestroy {
  language: Languages = "en"
  items: string[] = []
  maxPage: number = 1
  selectedItems : string[] = []

  @Input()
  currentPage: number = 1;

  ngOnDestroy(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPage']) {
      // Calculate the start index for the current page
      let start = (this.currentPage - 1) * 5;  // This correctly calculates the index for page start
      let end = start + 5;  // The end index for the page (not inclusive)
      
      // Clear previous selected items to avoid appending wrong data
      this.selectedItems = [];
      
      // Ensure that we don't go out of bounds
      for (let i = start; i < end && i < this.items.length; i++) {
        this.selectedItems.push(this.items[i]);
      }
      
      // Debugging logs
      console.log(this.items);
      console.log(this.selectedItems);
    }
  }
  

  ngOnInit(): void 
  {
    // Calculate the start index for the current page
    let start = (this.currentPage - 1) * 5;  // This correctly calculates the index for page start
    let end = start + 5;  // The end index for the page (not inclusive)
    
    // Clear previous selected items to avoid appending wrong data
    this.selectedItems = [];
    
    // Ensure that we don't go out of bounds
    for (let i = start; i < end && i < this.items.length; i++) {
      this.selectedItems.push(this.items[i]);
    }
    
    // Debugging logs
    console.log(this.items);
    console.log(this.selectedItems);
  }

  recieveNewIntem(newItem: string) {
    this.items.push(newItem)
    this.maxPage = Math.ceil(this.items.length / 5)
    
  }

  

}
