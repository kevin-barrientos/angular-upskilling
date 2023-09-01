import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoStoreService } from './todo-store.service';

@Injectable({
  providedIn: 'root',
})
export class TodosResolver implements Resolve<Todo[]> {
  constructor(private todosStore: TodoStoreService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> {
    return this.todosStore.load();
  }
}
