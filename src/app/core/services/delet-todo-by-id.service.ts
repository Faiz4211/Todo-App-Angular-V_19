import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DeletTodoByIdService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}v1/deleteFeedbBack/`;

  isloaidng = signal(false);

  deletTodoById(todoId: string) {
    return this.http.delete<any>(`${this.apiUrl}${todoId}`);
  }
}
