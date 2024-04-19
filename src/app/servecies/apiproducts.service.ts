import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';
import { Icategories } from '../models/icategories';

@Injectable({
  providedIn: 'root'
})
export class APIProductsService {

  constructor(private _httpclient : HttpClient) { }

  getAllProduct():Observable<Iproduct[]>{
  return  this._httpclient.get<Iproduct[]>(`${environment.baseUrl}/products`)
  }

  getProductById(id:number):Observable<Iproduct>{
    return  this._httpclient.get<Iproduct>(`${environment.baseUrl}/products/${id}`)
  }

  getPeroductByCatId(catId:number):Observable<Iproduct[]>{
    return  this._httpclient.get<Iproduct[]>( `${environment.baseUrl}/products?catId=${catId}`)
  
  }


  Addproduct(newProduct : Iproduct):Observable<Iproduct> {
  return  this._httpclient.post<Iproduct>(`${environment.baseUrl}/products`,JSON.stringify(newProduct))
  }

  deletProductById(id:number):Observable<Iproduct>{
    return  this._httpclient.delete<Iproduct>(`${environment.baseUrl}/products/${id}`)

  }

  UpdateProductById(updatedProduct: Iproduct): Observable<Iproduct> {
    return this._httpclient.put<Iproduct>(`${environment.baseUrl}/products/${updatedProduct.id}`,
      JSON.stringify(updatedProduct)
    );
  }
  


  getAllcatigory():Observable<Icategories[]>{
    return  this._httpclient.get<Icategories[]>(`${environment.baseUrl}/categories`)
  }

}
