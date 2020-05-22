import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

   fetchContactInformationData = 'assets/json/fetchContactInformation.json';
   fetchUserAddressData = 'assets/json/fetchUserAddress.json';
   fetchPreferencesData = 'assets/json/fetchPreferences.json';

   apiUrl = environment.apiUrl;
   public callLocalJson = environment.callLocalJson;

    constructor(private http: HttpClient) { 
    }

    fetchContactInformation(){
      if(this.callLocalJson){
        return this.http.get<any>(`${this.fetchContactInformationData}`);
      }else{
        return this.http.get(this.apiUrl + "fetchContactInformation.json");
      }
    }

    fetchUserAddress(){
      if(this.callLocalJson){
        return this.http.get<any>(`${this.fetchUserAddressData}`);
      }else{
        return this.http.get(this.apiUrl + "fetchContactInformation.json");
      }
    }


    fetchPreferences(){
      if(this.callLocalJson){
        return this.http.get<any>(`${this.fetchPreferencesData}`);
      }else{
        return this.http.get(this.apiUrl + "fetchPreferences.json");
      }
    }
}
