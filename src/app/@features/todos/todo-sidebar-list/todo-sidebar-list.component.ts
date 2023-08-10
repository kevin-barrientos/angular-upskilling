import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoStoreService } from '../services/todo-store.service';

@Component({
  selector: 'tpg-todo-sidebar-list',
  templateUrl: './todo-sidebar-list.component.html',
  styleUrls: ['./todo-sidebar-list.component.css'],
})
export class TodoSidebarListComponent {
  todos$ = this.todoStore.getTodos$;

  constructor(private todoStore: TodoStoreService) {}

  itemClicked(todo: Todo) {
    this.todoStore.select(todo);
  }
}
