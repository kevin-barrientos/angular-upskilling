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
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ConsoleLogInterceptor } from './interceptors/console-log.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListItemComponent,
    TodoSidebarListComponent,
    MasterDetailTemplateComponent,
    HighlightDirective,
    UnlessDirective,
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
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ConsoleLogInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
