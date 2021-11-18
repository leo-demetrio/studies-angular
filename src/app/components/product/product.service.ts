import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from 'src/app/views/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "api";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
  ) { }

  showOnConsole(msg: string): void {
    this.snackBar.open(msg, 'undo', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  // read(): Observable<Product[]>{
  //   return this.http.get<Product[]>(`${this.baseUrl}`);
  // }
  retrieveAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
  retreiveOfId(id: number): Observable<Product> {
    console.log(`${this.baseUrl}/${id}`)
    return this.http.get<Product>(`${this.baseUrl}/${id}`)
  }
  save(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl,product);
  }
  removeOfId(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
  updateOfId(product: Product): Observable<any> {
    console.log(product);
    return this.http.put<any>(this.baseUrl,product);
  }
  
}
