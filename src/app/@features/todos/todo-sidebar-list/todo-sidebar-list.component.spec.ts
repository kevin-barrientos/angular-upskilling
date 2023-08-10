import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSidebarListComponent } from './todo-sidebar-list.component';

describe('TodoSidebarListComponent', () => {
  let component: TodoSidebarListComponent;
  let fixture: ComponentFixture<TodoSidebarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoSidebarListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoSidebarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
