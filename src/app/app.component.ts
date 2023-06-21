import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'tpg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo?: Todo;

  itemSelected(todo: Todo) {
    this.todo = todo;
  }
}
