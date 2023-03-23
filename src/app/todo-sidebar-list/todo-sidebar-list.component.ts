import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tpg-todo-sidebar-list',
  templateUrl: './todo-sidebar-list.component.html',
  styleUrls: ['./todo-sidebar-list.component.css'],
})
export class TodoSidebarListComponent {
  @Output()
  itemClick = new EventEmitter<{ title: string; description: string }>();

  itemClicked(title: string, description: string) {
    this.itemClick.next({ title, description });
  }
}
