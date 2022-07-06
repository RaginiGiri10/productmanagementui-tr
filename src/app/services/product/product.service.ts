
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddProduct } from 'src/app/models/products/addProduct';
import { IEditProduct } from 'src/app/models/products/editProduct';
import { IProductList } from 'src/app/models/products/productList';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseApiUrl:string =environment.baseApiUrl

  constructor(private httpClient: HttpClient) { 
    
  }

  getAllProducts():Observable<IProductList[]> {
    
    return this.httpClient.get<IProductList[]>(this.baseApiUrl + 'product')
    
  }


  addProductView():Observable<IAddProduct> {
    return this.httpClient.get<IAddProduct>(this.baseApiUrl + 'product/addproduct')
  }

  addProduct(product: IAddProduct) {
   
    return this.httpClient.post(this.baseApiUrl + 'product/addproduct',product)
  }

  editProductView(id: number):Observable<IEditProduct> {
    return this.httpClient.get<IEditProduct>(this.baseApiUrl + 'product/' + id);
  }

  editProduct(id: number, product: IEditProduct) {
    return this.httpClient.put(this.baseApiUrl + 'product/' + id,product)
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(this.baseApiUrl + 'product/' + id)
  }
}
