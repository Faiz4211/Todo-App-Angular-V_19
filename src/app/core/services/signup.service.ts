import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import UserModel from '../models/userModel';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}v1/signUp`;

  isLoading = signal(false);

  login(userObject: UserModel) {
    return this.http.post<any>(this.apiUrl, userObject);
  }
}
