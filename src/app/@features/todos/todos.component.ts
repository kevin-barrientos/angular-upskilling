import { Component } from '@angular/core';
import { TodoStoreService } from './services/todo-store.service';

@Component({
  selector: 'tpg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  selected: boolean = false;

  constructor(private todoStore: TodoStoreService) {}

  ngOnInit(): void {
    this.todoStore.selected$.subscribe((t) => (this.selected = !!t));
  }
}
