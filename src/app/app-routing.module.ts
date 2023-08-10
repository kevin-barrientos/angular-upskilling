import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './@features/auth/login/login.component';
import { AuthGuard } from './@features/auth/guard/auth.guard';
import { authGuardNg14 } from './@features/auth/guard/auth.guard-ng14';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'todos',
    canLoad: [authGuardNg14],
    canActivate: [authGuardNg14],
    loadChildren: () => import('./@features/todos/todos.module').then((m) => m.TodosModule),
  },
  { path: '**', redirectTo: '/todos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
