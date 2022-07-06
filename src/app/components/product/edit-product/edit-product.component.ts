import { HttpErrorResponse } from '@angular/common/http';
import { IEditProduct } from './../../../models/products/editProduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({  
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  private productId: number = 0;

  editproduct: IEditProduct;
  
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router:Router) {
    
    this.editproduct = {
      id: 0,
      productName: '',
      productCategoryId: 0,
      productOrigin: '',
      productPrice: 0,
      productCategories:[]
    }
               }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.productId = +params['id']

      console.log('Product Id - ' ,this.productId)
      this.productService.editProductView(this.productId)
      .subscribe({
        next: response => {
          console.log(response)
          this.editproduct = response
          }
        })
      
    })
  }

  
  updateProduct() {

    console.log(this.productId)
    console.log(this.editproduct)
    this.productService.editProduct(this.productId,this.editproduct)
      .subscribe({
        next: _ => {
          this.router.navigate(['/products'])
        },
        error: (err:HttpErrorResponse) => {
          console.log(err.error)
        }
        })
  }

}
