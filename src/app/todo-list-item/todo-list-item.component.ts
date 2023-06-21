import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'tpg-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent {
  @Input()
  todo?: Todo;
}
