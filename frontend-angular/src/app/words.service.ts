import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryCreate } from './interfaces/category-create';
import { Observable } from 'rxjs';
import { Category } from './interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('/api/package-summaries');
  }

  getCategory(id: string) {
    return this.http.get(`/api/package/${id}`);
  }

  createCategory(category: CategoryCreate): Observable<Category> {
    return this.http.post<Category>('/api/package', category);
  }
}
