import { Component, OnInit } from '@angular/core';
import { UserProfileService } from "../../../../shared/services/user-profile.service";
import { CountryListService } from '../../../../shared//services/country-list.service';

@Component({
  selector: 'app-edit-address-information',
  templateUrl: './edit-address-information.component.html',
  styleUrls: ['./edit-address-information.component.scss']
})
export class EditAddressInformationComponent implements OnInit {

  addressInfo: any = {};
  public countriesList: any = [];
  public statesList: any = [];

  constructor(private userProfileService: UserProfileService, private countryListService: CountryListService) { }

  ngOnInit(): void {
    this.fetchUserAddress();
    this.countriesList = this.countryListService.getAllCountriesList();
  }

  fetchUserAddress(){
    this.userProfileService.fetchUserAddress().subscribe(
      response => {
        this.addressInfo = response.addressInfo;
        if(this.addressInfo && this.addressInfo.country){
          this.selectedCountryStates(this.addressInfo.country)
        }
      }, error => {
        this.addressInfo = {}
      }, () => {

      }
    );
  }

  selectedCountryStates(selectedCountry){
    var foundedCountry = this.countriesList.find(function(element){ return element.country == selectedCountry });
    if(foundedCountry){
      this.statesList = foundedCountry.states;
    }
  }
}
