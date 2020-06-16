import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserProfileService } from '../../../shared/services/user-profile.service';

@Component({
  selector: 'app-e-notifications',
  templateUrl: './e-notifications.component.html',
  styleUrls: ['./e-notifications.component.scss']
})
export class ENotificationsComponent implements OnInit {
  public eNotificationValue: [];
  public numbers;
  public name;
  public numberCheckboxChecked;
  public numberName;
  public numberLocation;
  public numberCompany;
  public numberIsEnabled;

  constructor(private service: UserProfileService) { }

  ngOnInit(): void {
    this.getEnotifications();
    this.fetchNumbers();
  }


  //Function to bind enotifications--

  getEnotifications() {
    this.service.fetchEnotifications().subscribe(
      response => {
        this.eNotificationValue = response.notifications;
      }, error => {
        this.eNotificationValue = []
      }, () => {
      }
    );
  }


  //Function call to bind numbers--

  fetchNumbers() {
    this.service.fetchNumbers().subscribe(
      response => {
        this.numbers = response.numbersInfo;
        this.name = this.numbers.name;
      }, error => {
        this.numbers = {}
      }, () => {

      }
    );
  }

    //Function call to show numbers details on chcekbox click--
    showNumbers(event){
      this.numberCheckboxChecked = event.target.checked;
      if(this.numberCheckboxChecked == true){
        this.numberLocation = this.numbers.location;
        this.numberCompany = this.numbers.company;
        this.numberIsEnabled = this.numbers.IsEnabled
      }
     else{
      this.numberLocation = "";
      this.numberCompany = "";
      this.numberIsEnabled = false
     }
    }

    removeNumbers(){
      this.numberLocation = "";
      this.numberCompany = "";
      this.numberIsEnabled = false
    }

    //Function call to update notification--

    updateNotifications(){
      let notifications =[];
      for(var i=0;i<this.eNotificationValue.length;i++){
        console.log(this.eNotificationValue[i]);
        let obj: any = {};
        // obj.name = this.eNotificationValue[i].name;
        // obj.Operation = this.entityList[i].Operation[j].operation;
        // privileges.push(obj);
      }
    }



}
