import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import UserModel from '../../core/models/userModel';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from '../../core/services/signup.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sign-up-page',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent {
  router = inject(Router);

  navigateToSignUp() {
    this.router.navigateByUrl('signup');
  }

  userObject = new UserModel();
  private signUpService = inject(SignupService);

  handleSignUpClick(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }

    this.signUpService.login(this.userObject).subscribe({
      next: (data) => {
        localStorage.setItem('token', data?.token);
        localStorage.setItem('userId', data?.user?._id);
        this.router.navigateByUrl('home');
        alert(data?.message || 'Login Success!');
      },
      error: (error) => {
        console.log(error?.error?.message, 'error response');
        alert(error?.error?.message || 'Login Failed!');
      },
      complete: () => {
        this.signUpService.isLoading.set(false);
      },
    });
  }

  navigateToLogin() {
    this.router.navigateByUrl('');
  }

  onRegister() {
    this.router.navigateByUrl('home');
  }
}
