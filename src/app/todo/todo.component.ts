import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'tpg-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input()
  todo?: Todo;
}
