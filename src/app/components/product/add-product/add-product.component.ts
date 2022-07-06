import { Router } from '@angular/router';
import { IAddProduct } from './../../../models/products/addProduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({ 
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: IAddProduct

  constructor(private productService: ProductService,
              private router:Router) { 
    this.product = {
      productName: '',
      productCategoryId: 1,
      productOrigin: '',
      productPrice: 0,
      productCategories:[]
    }
  }

  ngOnInit(): void {
  
    this.productService.addProductView()
      .subscribe({
        next: response => {
          this.product = response
          this.product.productCategoryId=1
       
        },
        error: err => {
          console.log(err)
        }
          
        })
  }

  addProduct() {
   this.product.productCategoryId = +this.product.productCategoryId
    console.log(this.product)
    this.productService.addProduct(this.product)
      .subscribe({
        next: response => { 
          
          console.log(response)
          this.router.navigate(['/products'])
          }
        })
  }

}
