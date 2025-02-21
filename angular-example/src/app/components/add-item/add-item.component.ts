import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../interfaces/ITask';

@Component({
  selector: 'add-item',
  imports: [FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class AddItemComponent {

  @Input()
  placeholder = "Type here your new task..."

  @Output()
  onSendInput = new EventEmitter<ITask>();

  currentItem = "";

  textTypes(e: KeyboardEvent) {
    if (e.key !== "Enter") {
      return   
    }

    this.sendInput();
  }

  sendButtonClicked($event: MouseEvent) {
    this.sendInput();
  }

  sendInput() {

    if (this.currentItem != "")
    {
      this.onSendInput.emit({
        description: this.currentItem, 
        status: 0
      })
      this.currentItem = ""
    }
    
  }
}
