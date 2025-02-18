import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input()
  item = "";

  status = 0;

  changeStatus($event: MouseEvent) {
    this.status == 0 ? this.status = 1 : this.status = 0;
    console.log("OI");
    
  }
}
