import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './@features/auth/login/login.component';
import { AuthGuard } from './@features/auth/guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'todos',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./@features/todos/todos.module').then((m) => m.TodosModule),
  },
  { path: '**', redirectTo: '/todos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
