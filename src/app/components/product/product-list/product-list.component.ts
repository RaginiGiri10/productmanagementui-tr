import { IProductList } from './../../../models/products/productList';

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: IProductList[]

  message: string = 'Loading...'
  messageClass:string ='bg-primary'
  isProductsAvailable: boolean = false;
  constructor(private productService: ProductService,
              private router:Router) { 
    this.productList = []

    
  }

  ngOnInit(): void {
   this.getAllProducts()
  }


  editProduct(id:number) {
    
    console.log("Id selected is ", id)
    this.router.navigate(['/editproduct',id])
  }

  deleteProduct(id: number) {
   
    var confirmDelete = confirm(`Are you sure you want to remove product = ${id}?`)
    if (confirmDelete) {
      this.productService.deleteProduct(id)
        .subscribe({
          next: _ => this.getAllProducts(),
          error: (err: HttpErrorResponse) => {
            console.log(err.error)
          }
          })
    }
  }

  getAllProducts() {
    this.productService.getAllProducts()
    .subscribe({
      next: (data) => {
        console.log(data)
        this.productList = data;    
        this.isProductsAvailable = true;
      },        
      error:(error:HttpErrorResponse) => {
        console.log(error.message)   
        this.message = "something went wrong!!!"
        this.messageClass="bg-danger"
      }            
    })
  }

}
