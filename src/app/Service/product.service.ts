import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductInformation } from '../Model/ProductInformation';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://localhost:7204';

  constructor(private http: HttpClient) {}

  searchProducts(name: string): Observable<any[]> {
    return this.http
      .get<ProductInformation[]>(
        `${this.apiUrl}/Review/SearchProductByName?name=${name}`
      )
      .pipe(catchError(this.handleError));
  }

  addReview(productId: number, rating: number): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/Review/AddReview`, {
        ProductId: productId,
        Rating: rating,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
