import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import UserModel from '../../core/models/userModel';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  router = inject(Router);

  navigateToSignUp() {
    this.router.navigateByUrl('signup');
  }

  userObject = new UserModel();
  private loginService = inject(LoginService);

  handleLoginClick(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }
    let loginData = {
      email: this.userObject.email,
      password: this.userObject.password,
    };

    this.loginService.login(loginData).subscribe({
      next: (data) => {
        localStorage.setItem('token', data?.token);
        this.router.navigateByUrl('home');
        alert(data?.message || 'Login Success!');
      },
      error: (error) => {
        console.log(error?.error?.message, 'error response');
        alert(error?.error?.message || 'Login Failed!');
      },
      complete: () => {
        this.loginService.isLoading.set(false);
      },
    });
  }
}
