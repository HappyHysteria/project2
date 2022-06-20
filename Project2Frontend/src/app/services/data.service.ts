import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>('https://apolis-grocery.herokuapp.com/api/category')
  }

  getSubCategoryByCatId(catId: number): Observable<any> {
    return this.http.get<any>('https://apolis-grocery.herokuapp.com/api/subcategory/' + catId)
  }

  getProductsByCatId(catId: number): Observable<any> {
    return this.http.get<any>('https://apolis-grocery.herokuapp.com/api/products/cat/' + catId)
  }

  getProductsBySubId(subId: number): Observable<any>{
    return this.http.get<any>('https://apolis-grocery.herokuapp.com/api/products/sub/' + subId)
  }
  
}

