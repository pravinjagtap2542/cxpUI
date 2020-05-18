import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.scss']
})
export class RegisterNewUserComponent implements OnInit {

  registerNewUserform = new FormGroup({
    soldToNum : new FormControl('', [Validators.required]),
  });
  
  isSubmitted  =  false;

  public userRelationship: any = [
    {
      value: "Customer",
      viewValue : "Customer"
    },
    {
      value: "No Relationship",
      viewValue : "No Relationship"
    },
    {
      value: "Partner",
      viewValue : "Partner"
    }
  ];


  public userAccessTypes: any = [
    {
      value: "Company Administrator",
      viewValue : "Company Administrator"
    },
    {
      value: "Sold To Administrator",
      viewValue : "Sold To Administrator"
    },
    {
      value: "User",
      viewValue : "User"
    }
  ];


  constructor(fb: FormBuilder) {
   
  }

  ngOnInit(): void {
  }

  get formControls() { 
    return this.registerNewUserform.controls; 
  }

  onFormSubmit(){
    console.log(this.registerNewUserform.value);
  }

}
