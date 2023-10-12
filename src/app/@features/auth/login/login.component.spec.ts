import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockProvider, ngMocks } from 'ng-mocks';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let userServiceMock: jasmine.SpyObj<UserService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    userServiceMock = jasmine.createSpyObj(['setUser']);
    routerMock = jasmine.createSpyObj(['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [MockProvider(UserService, userServiceMock), MockProvider(Router, routerMock)],
      imports: [CommonModule, FormsModule, NoopAnimationsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when user submits form', () => {
    const emailMock = 'jane.doe@test.com';

    beforeEach(() => {
      routerMock.navigate.and.returnValue(Promise.resolve(true));
      component.email = emailMock;

      component.onSubmit();
    });

    it('should set session by calling userService.setUser', () => {
      expect(userServiceMock.setUser).toHaveBeenCalledWith(emailMock);
    });

    it('should navigate to todos view', () => {
      expect(routerMock.navigate).toHaveBeenCalledWith(['todos']);
    });
  });
});
