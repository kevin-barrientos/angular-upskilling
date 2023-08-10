import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'tpg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.setUser(this.email);
  }
}
