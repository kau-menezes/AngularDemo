import { Component, Injectable, Input } from '@angular/core';
import { ITask } from '../../interfaces/ITask';
import { HttpClient } from '@angular/common/http';  // Import HttpClient


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class TaskComponent {

  

  constructor
  (
    private http: HttpClient
  ) {}  

  @Input()
  task: ITask | undefined

  @Input()
  item = "";

  status = 0;

  changeStatus(taskId: string | undefined, currentStatus: number | undefined) {
    const url = `http://localhost:8080/tasks/${taskId}`;
    const newStatus = currentStatus === 0 ? 1 : 0; 
  
    this.http.patch(url, { status: newStatus }).subscribe({
      next: (response) => {
        console.log('Task status updated:', response);
      },
      error: (error) => {
        console.error('Error updating task status:', error);
      }
    });
  }
  

  deleteTask(taskId: string | undefined) {
    const url = `http://localhost:8080/tasks/${taskId}`; 
  
    this.http.delete(url).subscribe({
      next: (response) => {
        console.log('Task deleted successfully:', response);
      },
      error: (error) => {
        console.error('Error deleting task:', error);
      }
    });
  }
  
}
