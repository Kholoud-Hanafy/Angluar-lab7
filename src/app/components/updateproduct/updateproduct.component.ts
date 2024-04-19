import { Component } from '@angular/core';
import { Icategories } from '../../models/icategories';
import { ActivatedRoute, Router } from '@angular/router';
import { APIProductsService } from '../../servecies/apiproducts.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Iproduct } from '../../models/iproduct';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-updateproduct',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent {
  categories:Icategories[] = [] as Icategories[];
   currentId:number =0;
   Product: Iproduct = {} as Iproduct;
   selectedImage: any;
  constructor(private _apiService :APIProductsService,private router: Router,private _activatedRouter :ActivatedRoute,private http: HttpClient ){}
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

    /////get product to update 
    this._activatedRouter.paramMap.subscribe((params)=>{
      this.currentId = Number(params.get('id'))
      this._apiService.getProductById(this.currentId).subscribe({
        next : (res)=>{
          // console.log(res);
          this.Product = res;
        },
        error:(err)=>{
        console.log(err)}
      })
    })


  }

  updateProduct(){
    // console.log(this.Product)
    this._apiService.UpdateProductById(this.Product).subscribe({
      next: (res)=>{
        alert("Product upadeted successfully ")
      },
      error:(err)=>{
        console.log(err)
      }
    })

     this.router.navigateByUrl('/Products')

  }

  

 

}
