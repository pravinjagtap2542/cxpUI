import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../../shared/services/user-profile.service';

@Component({
  selector: 'app-manage-my-sold-tos',
  templateUrl: './manage-my-sold-tos.component.html',
  styleUrls: ['./manage-my-sold-tos.component.scss']
})
export class ManageMySoldTosComponent implements OnInit {
  public soldToNumbers: any = {};
  public soldToPhoneNumber;
  public soldToLocation;
  public soldToCompany;
  public checkboxChecked;
  public isEnabled;
  public numbers;
  public numberCheckboxChecked;
  public numberName;
  public numberLocation;
  public numberCompany;
  public numberIsEnabled;
  public name;

  constructor(private service:UserProfileService) { }

  ngOnInit(): void {
    this.fetchSoldToNumbers();
    this.fetchNumbers();
  }

  //Function to bind soldTo numbers--

  fetchSoldToNumbers(){
    this.service.fetchSoldToNumbers().subscribe(
    response => {
      this.soldToNumbers = response.numOneInfo;

    }, error => {
      this.soldToNumbers = {}
    }, () => {
      
    }
  );
  }

  //Function to show details on the checkbox click---
  showDetails(event){
    this.checkboxChecked = event.target.checked;
    if(this.checkboxChecked == true){
      this.soldToPhoneNumber = this.soldToNumbers.phone;
      this.soldToLocation = this.soldToNumbers.location;
      this.soldToCompany = this.soldToNumbers.company;
      this.isEnabled = this.soldToNumbers.IsEnabled
    }
   else{
    this.soldToPhoneNumber = "";
    this.soldToLocation = "";
    this.soldToCompany = "";
    this.isEnabled = false
   }
   
  }

  //Function call to bind numbers--

  fetchNumbers(){
    this.service.fetchNumbers().subscribe(
      response => {
        this.numbers = response.numbersInfo;
        this.name =  this.numbers.name;
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

  //Function on requestall button click--

  requestAll(){
    this.isEnabled = true
  }

  //Function call on request selection button click--

  requestSelection(){
    let obj = {
      "name": this.soldToNumbers.name,
      "phoneNumber": this.soldToPhoneNumber,
      "location": this.soldToLocation,
      "company": this.soldToCompany,
      "checkboxStatus": this.isEnabled
    }

    this.service.postAllRequestedNumbers(obj).subscribe(data =>{
      if(data.status == 200){
        console.log("Notification added successfully");
      }
      else{
        
      }
    })
  }

  //Function of request numbers button---

  requestNumbers(){
    this.numberIsEnabled = true;
  }

  //Function of remove numbers button--

  removeNumbers(){
    this.numberLocation = "";
    this.numberCompany = "";
    this.numberIsEnabled = false
  }

}
