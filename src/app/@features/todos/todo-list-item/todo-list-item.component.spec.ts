import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemComponent } from './todo-list-item.component';
import { CommonModule } from '@angular/common';
import { MatListItemLine, MatListItemTitle, MatListModule } from '@angular/material/list';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Todo } from '../models/todo';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  let todoMock: Todo = { id: 1, title: 'Mock todo', description: 'Mock description', important: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListItemComponent],
      imports: [CommonModule, MatListModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('todo input', () => {
    beforeEach(() => {
      component.todo = todoMock;
      fixture.detectChanges();
    });

    it('should render its title and description', () => {
      const titleSpan: HTMLElement = fixture.debugElement.query(By.directive(MatListItemTitle)).nativeElement;
      const descriptionSpan: HTMLElement = fixture.debugElement.query(By.directive(MatListItemLine)).nativeElement;

      expect(titleSpan).toBeDefined();
      expect(titleSpan.innerText).toEqual(todoMock.title);
      expect(descriptionSpan).toBeDefined();
      expect(descriptionSpan.innerText).toEqual(todoMock.description);
    });
  });
});
