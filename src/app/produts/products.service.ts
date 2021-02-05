import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './products';
import { Category } from '../site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProduct(): Observable<Products> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Products>(productUrl)
}

  getCategories(): Observable<Category> {
    const categorytUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categorytUrl)
  }

  createProduct(productBody): Observable<Products> {
      const productUrl = 'http://localhost:3000/products';
      return this.httpClient.post<Products>(productUrl, productBody)
  }

  viewProduct(productId): Observable<Products> {
    const productUrl = 'http://localhost:3000/products/'+ productId;
    return this.httpClient.get<Products>(productUrl)
  }

  updateProduct(productId, productBody): Observable<Products>  {
    const productUrl = 'http://localhost:3000/products/'+ productId;
    return this.httpClient.put<Products>(productUrl, productBody)
  }

  deleteProduct(productId): Observable<Products>  {
    const productUrl = 'http://localhost:3000/products/'+ productId;
    return this.httpClient.delete<Products>(productUrl)
  }

  searchCategoryProduct(categoryId): Observable<Products>  {
    const productUrl = 'http://localhost:3000/products?category_id=' + categoryId;
    return this.httpClient.get<Products>(productUrl)
  }

  searchDateProduct(dateParam): Observable<Products>  {
    const productUrl = 'http://localhost:3000/products/=' + dateParam;
    return this.httpClient.get<Products>(productUrl)
  }

}
