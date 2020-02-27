import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'http://localhost:5000/api/articles';
  }

  getResult(corrId: string): Observable<string> {
    return this.httpClient.get<string>(this.apiUrl + '/' + corrId);
  }

  send(value: string) {
    return this.httpClient.post(this.apiUrl, { article: value });
  }
}
