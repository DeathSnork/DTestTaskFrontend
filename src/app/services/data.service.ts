import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, JSON.stringify(user))
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + id, JSON.stringify(user))
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteUser(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(this.apiUrl + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
