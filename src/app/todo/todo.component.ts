import { Component, Input } from '@angular/core';

@Component({
  selector: 'tpg-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input()
  todo?: { title: string; description: string; important?: boolean };
}
