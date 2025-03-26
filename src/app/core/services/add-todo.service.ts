import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environment/environment';
import AddTodo from '../models/addTodoModel';

@Injectable({
  providedIn: 'root',
})
export class AddTodoService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}v1/submittFeedBack/`;

  isloaidng = signal(false);

  addNewTask(task: AddTodo, userId: string) {
    return this.http.post<any>(`${this.apiUrl}${userId}`, task);
  }
}
