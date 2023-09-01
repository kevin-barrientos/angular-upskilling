import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../services/todo-store.service';
import { Todo } from '../models/todo';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'tpg-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todo: Todo | null = null;

  constructor(private todoStore: TodoStoreService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(tap((map) => this.fetchTodo(map.get('todoId')))).subscribe();
  }

  delete() {
    this.todoStore.delete(this.todo);
  }

  private fetchTodo(id: string | null) {
    if (id) {
      this.todoStore.fetch(+id).subscribe((todo) => (this.todo = todo));
    }
  }
}
