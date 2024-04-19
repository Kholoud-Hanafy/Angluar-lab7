import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService  {
  Notification : string [];
  
  constructor() { 
   this.Notification = [
    
    "you have unread massege",
    "pepole react to your post ",
    "rania send you friend request",
    // "",
    "post shared successfully"   
  ]
  }

  getNotications():Observable<string>{
    return new Observable<string> ((observer)=>{
      let counter = 0;
      
   let theInterval =   setInterval(()=>{
        console.log("test")
        if(counter== this.Notification.length){
          observer.complete();
        }
        if(this.Notification[counter]== ""){
          observer.error("Empty notification encountered");
        }
       observer.next(this.Notification[counter]);
       counter++;

      },2000)
     

      return {
        unsubscribe:()=>{
          clearInterval(theInterval)
        }
      }






    })

  }
  
}
