import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private Url = "http://localhost:3000/books";

  constructor(private http: HttpClient) { }

  getBookList(): Observable<any> {
    return this.http.get(`${this.Url}/`);
  }

  createBook(group: Object): Observable<object> {
    return this.http.post(`${this.Url}/`, group);
  }

  deleteBook(id: number): Observable<object> {
    return this.http.delete(`${this.Url}/${id}`)
  }

  updateBook(id: number, value: any): Observable<object> {
    return this.http.put(`${this.Url}/${id}`, value)
  }

  getBook(id: number) {
    return this.http.get(`${this.Url}/${id}`);
  }
}
