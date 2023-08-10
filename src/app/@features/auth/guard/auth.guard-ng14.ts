import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

export const authGuardNg14: CanMatchFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.getUser()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
