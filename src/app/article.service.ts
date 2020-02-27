import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'http://localhost:5000/api/articles';
  }

  send(value: string) {
    return this.httpClient.post(this.apiUrl, { value: value });
  }
}
