import { Component } from '@angular/core';

@Component({
  selector: 'tpg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo?: { title: string; description: string };

  itemSelected(todo: { title: string; description: string }) {
    this.todo = todo;
  }
}
