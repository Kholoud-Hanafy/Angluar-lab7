import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{StaticservicesService} from '../../servecies/staticservices.service'
import {Iproduct} from '../../models/iproduct';
import{Location} from '@angular/common';
import { APIProductsService } from '../../servecies/apiproducts.service';
@Component({
  selector: 'app-detailes',
  standalone: true,
  imports: [],
  templateUrl: './detailes.component.html',
  styleUrl: './detailes.component.css'
})
export class DetailesComponent implements OnInit{
  currentId:number = 0;
  Product: Iproduct | null = null;
  idsArr:number[];
  currentIndex:number = 0;
  constructor(private _activatedRoute: ActivatedRoute,
     private _staticproductService:StaticservicesService,
    private _location: Location,
    private _router : Router,
    private _apiproductsService : APIProductsService
    ){


    this.idsArr   =this._staticproductService.mapProductsToId()

  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe ((paramMap)=>{
      this.currentId =Number(paramMap.get('id') )  
       this._apiproductsService.getProductById(this.currentId).subscribe({
        next : (res)=>{
          this.Product = res
        },
        error:(err)=>{
          console.log(err)
        }
       })
    })
  

  // this.currentId =Number(this._activatedRoute.snapshot.paramMap.get('id') )
  //  this.Product  = this._staticproductService.getProductById(this.currentId);
  }

  goBack(){
    this._location.back();
  }
  
  next(){
  //  console.log(this.idsArr)
  this.currentIndex =  this.idsArr.findIndex((id)=>id == this.currentId)
  // console.log(this.idsArr.findIndex((id)=>id == this.currentId))
  if(this.currentIndex != this.idsArr.length -1){
   this._router.navigateByUrl(`/Details/${this.idsArr[this.currentIndex +1]}`)
  }
  }

  prev(){

    this.currentIndex =  this.idsArr.findIndex((id)=>id == this.currentId)
  //console.log(this.idsArr.findIndex((id)=>id == this.currentId))
  if(this.currentIndex!= 0){

  this._router.navigateByUrl(`/Details/${this.idsArr[this.currentIndex -1]}`)
  }

  }

  
}
