import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const loggedToken = localStorage.getItem('token');

  if (loggedToken !== null) {
    return true;
  } else {
    router.navigateByUrl('');
    return false;
  }
};
