import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../data-model/user'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  private users: User[];

  public fetchUsers(): Observable<User[]> {
console.log('http service method...');
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
