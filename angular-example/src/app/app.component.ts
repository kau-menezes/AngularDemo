import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { PaginationComponent } from "./components/pagination/pagination.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, PaginationComponent],   // imports go here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-example';
}
