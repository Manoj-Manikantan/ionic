import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router){}

  canLoad() {
    const isAuthenticated = !!(+localStorage.getItem('authenticated'));

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/splash']);
      return false;
    }
  }
}
