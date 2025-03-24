import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-header',
  imports: [],
  templateUrl: './custom-header.component.html',
  styleUrl: './custom-header.component.css',
})
export class CustomHeaderComponent {
  router = inject(Router);
  onLogOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }
}
