import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { BehaviorSubject, first, merge, Observable, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  private todos: Todo[] = [];

  private readonly _todos$ = new BehaviorSubject<Todo[]>([...this.todos]);

  private readonly _selected$ = new BehaviorSubject<Todo | null>(null);

  constructor(private http: HttpClient) {}

  get selected$(): Observable<Todo | null> {
    return this._selected$.asObservable();
  }

  get getTodos$(): Observable<Todo[]> {
    const remote$ = this.http.get<Todo[]>('https://64b06638c60b8f941af5acc4.mockapi.io/api/todos').pipe(
      first(),
      tap((todos) => (this.todos = todos))
    );
    const local$ = this._todos$.asObservable();
    return merge(remote$, local$);
  }

  select(todo: Todo | null) {
    this._selected$.next(todo);
  }

  delete(todo: Todo | null) {
    if (todo) {
      const i = this.todos.findIndex((t) => t === todo);
      if (i > -1) {
        this.todos.splice(i, 1);

        if (this._selected$.value === todo) {
          this.select(null);
        }

        this._todos$.next([...this.todos]);
      }
    }
  }
}
