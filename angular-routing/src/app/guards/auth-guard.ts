import { CanActivateFn } from '@angular/router';

let isLoggedIn = false;

export const authGuard: CanActivateFn = () => {
  if (isLoggedIn) return true;

  alert('Please login first');
  return false;
};

export function login() {
  isLoggedIn = true;
}

export function logout() {
  isLoggedIn = false;
}