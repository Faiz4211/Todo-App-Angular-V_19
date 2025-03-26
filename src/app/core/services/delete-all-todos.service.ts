import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DeleteAllTodosService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}v1/deleteAllFeedBacks`;

  deleteAllTodos() {
    return this.http.delete<any>(this.apiUrl);
  }
}
