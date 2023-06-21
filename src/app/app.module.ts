import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoSidebarListComponent } from './todo-sidebar-list/todo-sidebar-list.component';
import { MasterDetailTemplateComponent } from './master-detail-template/master-detail-template.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListItemComponent,
    TodoSidebarListComponent,
    MasterDetailTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
