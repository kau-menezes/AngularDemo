import { Component, Injectable, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { AddItemComponent } from "../../components/add-item/add-item.component";
import { Languages, TranslatePipe } from '../../translate.pipe';
import { TaskComponent } from "../../components/task/task.component";
import { ITask } from '../../interfaces/ITask';


@Component({
  selector: 'todo-list',
  imports: [AddItemComponent, TranslatePipe, TaskComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges, OnDestroy {
  language: Languages = "en";
  items: ITask[] = [];  
  maxPage: number = 1;
  selectedItems: ITask[] = [];
  current: ITask | undefined

  @Input() 
  currentPage: number = 1;

  constructor
  (
    private http: HttpClient
  ) {}  
  ngOnDestroy(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPage']) {
      this.updateSelectedItems();
    }
  }

  ngOnInit(): void {
    this.getTasks(); 
    this.updateSelectedItems();
  }

  getTasks(): void {
    this.http.get<ITask[]>('http://localhost:8080/tasks').subscribe({
      next: (data) => {
        this.items = data;
        this.maxPage = Math.ceil(this.items.length / 5); 
        this.updateSelectedItems();  
        console.log("Fetched tasks:", this.items);
      },
      error: (err) => {
        console.error("Failed to fetch tasks", err);
      }
    });
  }

  async receiveNewItem(newTask: ITask) {
    this.http.post<ITask>('http://localhost:8080/tasks', newTask).subscribe({
      next: (responseData) => {
        console.log("Task added successfully:", responseData);
        
        this.getTasks();

        this.items.push(responseData);  
        this.maxPage = Math.ceil(this.items.length / 5);

        if (this.selectedItems.length == 5) {
          this.currentPage = this.maxPage;  
        }

        this.updateSelectedItems();  

        console.log("Item added:", responseData);
        console.log("Selected items:", this.selectedItems);
      },
      error: (err) => {
        console.error("Error adding task", err);
      }
    });
  }

  updateSelectedItems(): void {
    let start = (this.currentPage - 1) * 5;
    let end = start + 5;

    this.selectedItems = [];
    for (let i = start; i < end && i < this.items.length; i++) {
      this.selectedItems.push(this.items[i]);
    }

    console.log("Selected items:", this.selectedItems);
  }
}
