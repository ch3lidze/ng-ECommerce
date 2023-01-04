import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces';

import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService{
  getProducts(params: {
    categoryId?: number,
    limit?: string,
    search?: string
  }): Observable<Product[]> {
    return this.get<Product[]>('product', params)
  }
   
}
