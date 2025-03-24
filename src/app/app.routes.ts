import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { SignUpPageComponent } from './features/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'home', component: HomePageComponent, canActivate: [authGuard] },
];
