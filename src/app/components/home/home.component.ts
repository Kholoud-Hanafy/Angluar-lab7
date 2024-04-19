import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../servecies/notification.service';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit ,  OnDestroy{
  subscripions!: Subscription;
  Notifications !:string;

  constructor(private _notificationService : NotificationService){

  }
 ngOnInit(): void {
  this.subscripions =  this._notificationService.getNotications().pipe(
    // map((msg)=>`${msg} kholoud`),
    // filter((msg)=>msg.startsWith('p'))
    
  ).subscribe({

    next: (notification)=>{
    this.Notifications =notification
     // console.log(notification)
    },
    error : (err)=>{
      console.log(err)
    },
    complete:()=>{
      console.log("notification complet successfully sent")
    }
      
    },
   
    
   )
 }

 ngOnDestroy(): void {
   
    this.subscripions.unsubscribe();

 }

}
