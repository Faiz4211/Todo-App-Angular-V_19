import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}v1/getFeedBacks`;

  getTodos(id: string) {
    const newUrl = `${this.apiUrl}/${id}`;
    console.log(newUrl);
    return this.http.get<any>(newUrl);
  }
}
