import { Component, OnInit } from '@angular/core';
import { Icategories } from '../../models/icategories';
import { APIProductsService } from '../../servecies/apiproducts.service';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit{
 categories:Icategories[] = [] as Icategories[];
 newProduct:Iproduct ={} as Iproduct;
  constructor(private _apiService :APIProductsService,private router: Router){

  }

  ngOnInit(): void {
    this._apiService.getAllcatigory().subscribe({
      next : (res)=>{
        // console.log(res)
        this.categories = res
      },
      error:(err)=>{
        console.log(err)
      }
    })
    
  }
  addNewProduct(){
   this._apiService.Addproduct(this.newProduct).subscribe({
    next:()=>{
    alert("Product Added successfully");
    this.router.navigate(['/Products'])

    },

   })
  }
}
