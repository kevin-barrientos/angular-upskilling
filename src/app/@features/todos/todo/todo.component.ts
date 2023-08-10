import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../services/todo-store.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'tpg-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todo: Todo | null = null;

  constructor(private todoStore: TodoStoreService) {}

  ngOnInit(): void {
    this.todoStore.selected$.subscribe((s) => (this.todo = s));
  }

  delete() {
    this.todoStore.delete(this.todo);
  }
}
