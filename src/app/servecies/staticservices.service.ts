import { Injectable } from '@angular/core';
import {Iproduct} from '../models/iproduct';
import { reduce } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StaticservicesService {
  products : Iproduct[]
  constructor() {
    this.products = [
      
      {id: 100, name : "Sumsung Mobile", price : 1000, quantity :4 , img :"assets/img/a98-5g-480x480-blue.png.thumb.webp" , catId : 2},
      {id: 200, name : "oppo Mobile", price : 14000, quantity :1 , img : "assets/img/a98-5g-480x480-blue.png.thumb.webp", catId : 2},
      {id: 300, name : "Hawawi Taplet", price : 2000, quantity :2 , img : "assets/img/shopping.webp", catId : 3},
      {id: 400, name : "Lenovo Taplet", price : 3000, quantity :4 , img : "assets/img/shopping.webp" , catId: 3 },
      {id: 500, name : "Dell laptop", price : 15000, quantity :6 , img : "assets/img/shopping (1).webp", catId : 1},
      {id: 600, name : "Lenovo laptop", price : 25000, quantity :1 , img :"assets/img/shopping (1).webp" , catId : 1}
 
 
    ] ;
   }

   getAllProducts() : Iproduct[]{
    return this.products
   }

   getProductById(id:number):Iproduct | null{

    let foundedProduct = this.products.find((prd)=>prd.id == id);
    return foundedProduct ? foundedProduct : null;

   }
   getProductsBycatId(catId:number):Iproduct[]{
    if(catId == 0){
      return this.products
    }else{
    return  this.products.filter((prd)=>prd.catId == catId)
   }
  }

 mapProductsToId():number []{
 return this.products.map((prd)=>prd.id)

 }

}
