import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddItemComponent } from "../add-item/add-item.component";
import { Languages, TranslatePipe } from '../translate.pipe';

@Component({
  selector: 'todo-list',
  imports: [AddItemComponent, TranslatePipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit, OnChanges, OnDestroy {
  language: Languages = "en"
  items: string[] = []

  ngOnDestroy(): void { }

  ngOnChanges(changes: SimpleChanges): void { }

  ngOnInit(): void { }

  recieveNewIntem(newItem: string) {
    this.items.push(newItem)
  }

}
