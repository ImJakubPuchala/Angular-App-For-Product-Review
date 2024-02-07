import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInformation } from '../Model/ProductInformation';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = "https://localhost:7204";

  constructor(private http: HttpClient) { }

  searchProducts(name: string): Observable<any[]> {
    return this.http.get<ProductInformation[]>(`${this.apiUrl}/Review/SearchProductByName?name=${name}`);
  }

  addReview(productId: number, rating: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Review/AddReview`, {
      ProductId: productId,
      Rating: rating,
    });
  }
}
