import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerService } from 'src/app/server.service';
import { Customer } from 'src/Shared/customer.model';

@Component({
  selector: 'app-sign-up-customer',
  templateUrl: './sign-up-customer.component.html',
  styleUrls: ['./sign-up-customer.component.css']
})
export class SignUpCustomerComponent implements OnInit {

  signUpForm : FormGroup;

  Message : string;

  constructor(private srvService: ServerService ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'fname': new FormControl(null, Validators.required),
      'lname': new FormControl(null, Validators.required),
      'username': new FormControl(null , Validators.required),
      'password': new FormControl(null , Validators.required)
    })
  }

  onsubmit(){
    let customer = new Customer(this.signUpForm.get('fname').value,this.signUpForm.get('lname').value,this.signUpForm.get('username').value,
    this.signUpForm.get('password').value,[],[],false);
  
    if(this.signUpForm.status === 'VALID')
      {
        this.srvService.onRegister(customer);
        this.Message = 'Sign Up Successfully ...!  >_-';
      }else{
        this.Message = 'Fill out all of the inputs ...!'
      }
  }


}
