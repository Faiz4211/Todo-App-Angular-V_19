import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}v1/getFeedBacks`;
  isLoading = signal(false);
  getTodos(id: string) {
    this.isLoading.set(true);
    const newUrl = `${this.apiUrl}/${id}`;
    console.log(newUrl);

    return this.http
      .get<any>(newUrl)
      .pipe(finalize(() => this.isLoading.set(false)));
  }
}
