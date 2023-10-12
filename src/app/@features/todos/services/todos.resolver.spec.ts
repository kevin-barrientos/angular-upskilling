import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TodosResolver } from './todos.resolver';
import { TodoStoreService } from './todo-store.service';
import { EMPTY, Observable, of } from 'rxjs';
import { Todo } from '../models/todo';

describe('TodosResolver', () => {
  let resolver: TodosResolver;

  let todoMock: Todo = { id: 1, title: 'Mock todo', description: 'Mock description', important: false };

  let todoStoreServiceMock: jasmine.SpyObj<TodoStoreService>;

  beforeEach(() => {
    todoStoreServiceMock = jasmine.createSpyObj(['load']);

    resolver = new TodosResolver(todoStoreServiceMock);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  describe('resolve', () => {
    let routeMock = {};
    let stateMock = {};

    let todos$: Observable<Todo[]>;

    beforeEach(() => {
      todoStoreServiceMock.load.and.returnValue(of([todoMock]));

      todos$ = resolver.resolve(routeMock as any, stateMock as any);
    });

    it('should load the todos', fakeAsync(() => {
      let todos: Todo[] = [];

      todos$.subscribe((l) => (todos = l));
      tick();

      expect(todos).toEqual([todoMock]);
    }));
  });
});
