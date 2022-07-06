import { IProductCategory } from 'src/app/models/products/productCategory';

export interface IAddProduct{
    productName: string,
    productCategoryId: number,
    productPrice: number,
    productOrigin: string,
    productCategories:IProductCategory[]
}