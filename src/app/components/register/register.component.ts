import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
userForm: FormGroup
constructor(){

  this.userForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]),
    email : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    password: new FormControl('',[Validators.required ]),
    address: new FormGroup({
     city: new FormControl(''),
     street: new FormControl('')
    }),
    phone : new FormArray([new FormControl('',[Validators.required, Validators.pattern('[0-9]{11}')])])

  })
}

  get name(){
 return this.userForm.get('name')
}
get email(){
  return this.userForm.get('email')
 }

 get password(){
  return this.userForm.get('password')
 }
 get phones(){
  return this.userForm.get('phone') as FormArray
 }

 addNewPhone() {
  this.phones.push(new FormControl('', [Validators.required, Validators.pattern('[0-9]{11}')]));
}

 removePhone(index:number){
  this.phones.removeAt(index)
 }



}
