import { TodosComponent } from './todos.component';
import { TodoStoreService } from './services/todo-store.service';
import { Subject } from 'rxjs';
import { Todo } from './models/todo';
import { Shallow } from 'shallow-render';
import { TodosModule } from './todos.module';

describe('TodosComponent', () => {
  let component: TodosComponent;

  let todoStoreMock: Partial<TodoStoreService>;
  let selected$ = new Subject<Todo>();

  beforeEach(async () => {
    todoStoreMock = {
      selected$: selected$.asObservable(),
    };

    const { element } = await new Shallow<TodosComponent>(TodosComponent, TodosModule)
      .mock(TodoStoreService, todoStoreMock)
      .render();

    component = element.componentInstance;
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
