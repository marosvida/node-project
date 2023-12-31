import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryCreate } from './interfaces/category-create';
import { Observable } from 'rxjs';
import { Category } from './interfaces/category';
import { Word } from './interfaces/words';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('/api/package-summaries');
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(`/api/package/${id}`);
  }

  createCategory(category: CategoryCreate): Observable<Category> {
    return this.http.post<Category>('/api/package', category);
  }

  createWord(word: Word, id: string): Observable<Word> {
    return this.http.post<Word>(`/api/package/${id}/fact`, word);
  }
}
