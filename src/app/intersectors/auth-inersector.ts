import { HttpEventType, HttpHandler, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";
export function authIntersector(req:HttpRequest<any>,next:HttpHandlerFn){
//console.log(req)

let modefiesReq = req
if(req.method=="POST"){
  modefiesReq =  req.clone({
     headers: req.headers.append("lang","en")   
    })
}
   return next(modefiesReq).pipe(
    tap((event)=>{
        if(event.type==HttpEventType.Response){
            console.log(event);
            
        }
    })


   )

}