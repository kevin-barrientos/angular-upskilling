import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { BehaviorSubject, first, map, merge, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  private readonly _todos$ = new BehaviorSubject<Todo[]>([]);

  private readonly _selected$ = new BehaviorSubject<Todo | null>(null);

  private _remote$ = this.http.get<Todo[]>('/api/todos').pipe(
    first(),
    tap((todos) => todos.forEach((item, i) => (item.id = i))),
    tap((todos) => this._todos$.next(todos))
  );

  constructor(private http: HttpClient) {}

  get selected$(): Observable<Todo | null> {
    return this._selected$.asObservable();
  }

  get todos$(): Observable<Todo[]> {
    return this._todos$.asObservable();
  }

  get todos(): Todo[] {
    return this._todos$.value;
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

  fetch(id: number): Observable<Todo> {
    return this.load().pipe(map((todos) => todos[id]));
  }

  load() {
    let todos$ = this.todos$;
    if (this.todos.length === 0) {
      todos$ = this._remote$;
    }
    return todos$;
  }
}
