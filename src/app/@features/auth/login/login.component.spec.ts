import { ComponentFixture } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { MockBuilder, MockInstance, MockProvider, MockRender } from 'ng-mocks';
import { LoginModule } from './login.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let userServiceMock: jasmine.SpyObj<UserService>;
  let routerMock: jasmine.SpyObj<Router>;

  MockInstance.scope();

  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj(['setUser']);
    routerMock = jasmine.createSpyObj(['navigate']);

    return MockBuilder(LoginComponent, LoginModule)
      .keep(FormsModule)
      .provide(MockProvider(UserService, userServiceMock))
      .provide(MockProvider(Router, routerMock));
  });

  beforeEach(() => {
    fixture = MockRender(LoginComponent);
    component = fixture.componentInstance;
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
