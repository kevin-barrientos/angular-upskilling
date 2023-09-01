import { Component } from '@angular/core';
import { TodoStoreService } from '../services/todo-store.service';

@Component({
  selector: 'tpg-todo-sidebar-list',
  templateUrl: './todo-sidebar-list.component.html',
  styleUrls: ['./todo-sidebar-list.component.css'],
})
export class TodoSidebarListComponent {
  todos$ = this.todoStore.todos$;

  constructor(private todoStore: TodoStoreService) {}
}
