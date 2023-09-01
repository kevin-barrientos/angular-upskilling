import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodosResolver } from './services/todos.resolver';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      {
        path: ':todoId',
        component: TodoComponent,
      },
    ],
    resolve: {
      todos: TodosResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
