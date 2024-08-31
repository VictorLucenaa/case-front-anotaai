import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Icards } from '../interfaces/icards';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private readonly url: string =
    'https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json';

  private loading: boolean = true;

  constructor(private readonly http: HttpClient) {}

  getCards$(): Observable<Icards[]> {
    return this.http.get<Icards[]>(this.url).pipe(
      tap(() => (this.loading = false)),
      catchError((error) => {
        this.loading = false;
        return this.handleError(error);
      })
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const errorMessage = `Erro ${error.status}: ${error.message}`;
    return throwError(() => new Error(errorMessage));
  }

  isLoading(): boolean {
    return this.loading;
  }
}
