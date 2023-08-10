import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: { email: string } | null = null;

  constructor() {}

  setUser(email: string): void {
    this.user = { email };
  }

  getUser(): { email: string } | null {
    return this.user;
  }

  clearUser(): void {
    this.user = null;
  }
}
