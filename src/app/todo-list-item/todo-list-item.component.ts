import { Component, Input } from '@angular/core';

@Component({
  selector: 'tpg-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent {
  @Input()
  title: string = '';

  @Input()
  description: string = '';
}
