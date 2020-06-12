import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserProfileService } from '../../../shared/services/user-profile.service';

@Component({
  selector: 'app-e-notifications',
  templateUrl: './e-notifications.component.html',
  styleUrls: ['./e-notifications.component.scss']
})
export class ENotificationsComponent implements OnInit {
  public eNotificationFormGroup: FormGroup;

  constructor( private formbuilder: FormBuilder,
              private service:UserProfileService) { }

  ngOnInit(): void {
    //Form initialization--
    this.eNotificationFormGroup = this.formbuilder.group({
      address: [''],
      subject: ['',],
      message:[''],
      customerChecked:[false],
      noRelationshipChecked:[false],
      partnerChecked:[false]
  })
  }

  //Function on cancel button click to reset the form-- 
  cancelNotification(){
    this.eNotificationFormGroup.reset();
  }

  //Function on submit button click--

  saveNotification(){
    let notificationObj ={
      "fromAddress" : this.eNotificationFormGroup.value.address != null ? this.eNotificationFormGroup.value.address : "",
      "subject" : this.eNotificationFormGroup.value.subject != null ? this.eNotificationFormGroup.value.subject : "",
      "message": this.eNotificationFormGroup.value.message != null ? this.eNotificationFormGroup.value.message : "",
      "isCustomer" : this.eNotificationFormGroup.value.customerChecked != false ? this.eNotificationFormGroup.value.customerChecked : false,
      "isNoRelationship": this.eNotificationFormGroup.value.noRelationshipChecked !=false ? this.eNotificationFormGroup.value.noRelationshipChecked : false,
      "isPartner": this.eNotificationFormGroup.value.partnerChecked !=false ? this.eNotificationFormGroup.value.partnerChecked: false
    }
    this.service.postEnotification(notificationObj).subscribe(data =>{
     if(data.status == 200){
       console.log("Notification added successfully");
     }
     else{

     }
     
    })
  }
 

}
