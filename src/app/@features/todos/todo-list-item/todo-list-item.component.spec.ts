import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemComponent } from './todo-list-item.component';
import { CommonModule } from '@angular/common';
import { MatListItemLine, MatListItemTitle, MatListModule } from '@angular/material/list';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Todo } from '../models/todo';
import { Shallow } from 'shallow-render';
import { TodosModule } from '../todos.module';
import { Rendering } from 'shallow-render/dist/lib/models/rendering';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;
  let rendering: Rendering<TodoListItemComponent, never>;

  let todoMock: Todo = { id: 1, title: 'Mock todo', description: 'Mock description', important: false };

  beforeEach(async () => {
    const shallow = new Shallow(TodoListItemComponent, TodosModule);
    rendering = await shallow.render();
    fixture = rendering.fixture;
    component = rendering.element.componentInstance;
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
      const titleSpan: HTMLElement = rendering.find(MatListItemTitle).nativeElement;
      const descriptionSpan: HTMLElement = rendering.find(MatListItemLine).nativeElement;

      expect(titleSpan).toBeDefined();
      expect(titleSpan.innerText).toEqual(todoMock.title);
      expect(descriptionSpan).toBeDefined();
      expect(descriptionSpan.innerText).toEqual(todoMock.description);
    });
  });
});
