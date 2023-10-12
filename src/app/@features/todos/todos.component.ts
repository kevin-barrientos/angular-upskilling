import { Component } from '@angular/core';
import { TodoStoreService } from './services/todo-store.service';
import { tap } from 'rxjs';

@Component({
  selector: 'tpg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  selected: boolean = false;

  constructor(private todoStore: TodoStoreService) {}

  ngOnInit(): void {
    console.log('NgOnInit');
    this.todoStore.selected$
      .pipe(tap((v) => console.log('tap', v, this.selected)))
      .subscribe((t) => (this.selected = !!t));
  }
}
