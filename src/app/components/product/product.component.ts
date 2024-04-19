import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Iproduct} from '../../models/iproduct';
import { Router, RouterLink } from '@angular/router';
import { FormsModule} from '@angular/forms';
import {ProductcardsDirective} from '../../directives/productcards.directive';
import {IdformatPipe} from '../../pipes/idformat.pipe';
import {CreditcardformatPipe} from '../../pipes/creditcardformat.pipe';
import {StaticservicesService} from '../../servecies/staticservices.service';
import { APIProductsService } from '../../servecies/apiproducts.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,ProductcardsDirective,IdformatPipe,CreditcardformatPipe,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  implements OnChanges, OnInit{
  products : Iproduct[] = [] as Iproduct[];
  filteredProducts :Iproduct[] =[] as Iproduct[];
  totalOrderPrice :number =0;
 @Input() recivedCatId :number = 0;
  
 @Output() onBuyProduct:EventEmitter<{ count: string, product:Iproduct }>

  constructor(private _apiproductsservice : APIProductsService, private _router :Router){
  //  this.products = this._apiproductsservice.getAllProduct().subscribe({
    

  //  });
    

    // this.filteredProducts= this.products;
   
    this.onBuyProduct = new EventEmitter<{ count: string, product:Iproduct }>();
    
}

ngOnInit(): void {
   this._apiproductsservice.getAllProduct().subscribe({
     next : (res)=>{
      //console.log(res)
      this.products = res;
      this.filteredProducts = this.products
     },

     error:(err)=>{
      console.log(err)
     }



  });
   
}

ngOnChanges(){
  
  this._apiproductsservice.getPeroductByCatId(this.recivedCatId).subscribe({
    next : (res)=>{
      this.filteredProducts =res
    },
    error:(err)=>{
      console.log(err)
    }


    
  });


  
}

deletePrd(id:number){
 this._apiproductsservice.deletProductById(id).subscribe({
  next: (res)=>{
    console.log(res)
    alert("product deleted successfully")
    this.products = this.products.filter(product => product.id !== id);
  },
  error: (err)=>{
    console.log(err)
  }
 })

}

navigatToDetails(id: number){
  // this._router.navigateByUrl(`/Details/${id}`)
   this._router.navigate(['/Details',id])

}
navigatToUpdate(id:number){
  this._router.navigate(['/UpdateProduct',id])

}

buy(count:string,product: Iproduct) {
  
 this.totalOrderPrice +=Number(count) *product.price;
  if (product.quantity > 0) {
    product.quantity-=Number(count); 
  } else {
    
    console.log("Product is out of stock");
    
  }

  this.onBuyProduct.emit({count,product});
}







}
