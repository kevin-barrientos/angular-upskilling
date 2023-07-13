import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from './services/todo-store.service';

@Component({
  selector: 'tpg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selected: boolean = false;

  constructor(private todoStore: TodoStoreService) {}

  ngOnInit(): void {
    this.todoStore.selected$.subscribe((t) => (this.selected = !!t));
  }
}
