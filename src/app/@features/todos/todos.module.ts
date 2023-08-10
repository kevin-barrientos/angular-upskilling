import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoSidebarListComponent } from './todo-sidebar-list/todo-sidebar-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MasterDetailTemplateComponent } from '../../shared/view-templates/master-detail-template/master-detail-template.component';
import { HighlightDirective } from '../../lib/highlight.directive';
import { UnlessDirective } from '../../lib/unless.directive';

@NgModule({
  declarations: [TodosComponent, TodoComponent, TodoListItemComponent, TodoSidebarListComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    MasterDetailTemplateComponent,
    HighlightDirective,
    UnlessDirective,
  ],
  exports: [TodosComponent],
})
export class TodosModule {}
