import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoStoreService } from './services/todo-store.service';
import { Subject } from 'rxjs';
import { Todo } from './models/todo';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  let todoStoreMock: Partial<TodoStoreService>;
  let selected$ = new Subject<Todo>();

  beforeEach(async () => {
    todoStoreMock = {
      selected$: selected$.asObservable(),
    };

    await TestBed.configureTestingModule({
      declarations: [TodosComponent],
      providers: [{ provide: TodoStoreService, useValue: todoStoreMock }],
    }).overrideComponent(TodosComponent, { set: { template: '' } });

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initial state', () => {
    it('should not have any item selected', () => {
      expect(component.selected).toBeFalsy();
    });
  });

  describe('when user selects a todo', () => {
    const selectedTodo = { id: 1, description: '', important: false, title: 'Fake' };

    beforeEach(() => {
      selected$.next(selectedTodo);
    });

    it('should change selected flag to true', () => {
      expect(component.selected).toBeTruthy();
    });
  });
});
