import { Component } from '@angular/core';
import {Icategories} from '../../models/icategories';
import {Iproduct} from '../../models/iproduct';

import{ProductComponent} from'../product/product.component';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  selectedCatId : number = 0;
 categories : Icategories[]
 orderedProducts: { count: string, product: Iproduct }[] = [];
 constructor(){
  this.categories = [
    {id : 1 ,name: "Laptop"},
    {id : 2 ,name: "Mobile"},
    {id : 3 ,name: "Taplet"}
  ];
 }


 recivedProducts(data: { count: string, product:Iproduct  }){
  const { count, product } = data;
  this.orderedProducts.push({ count, product });
  console.log(this.orderedProducts)
 }

//  delete(prd:{ count: string, product: Iproduct }){
//   this.orderedProducts.pop(prd);

//  }

delete(prd: { count: string, product: Iproduct }) {
  const index = this.orderedProducts.indexOf(prd);
  if (index !== -1) {
    this.orderedProducts.splice(index, 1);
  }
}



}
