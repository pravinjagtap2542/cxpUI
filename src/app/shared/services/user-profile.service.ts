import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

   fetchContactInformationData = 'assets/json/fetchContactInformation.json';
   fetchUserAddressData = 'assets/json/fetchUserAddress.json';
   fetchPreferencesData = 'assets/json/fetchPreferences.json';
   fetchSoldToData = 'assets/json/fetchSoldToNumber.json';
   fetchNumbersData = 'assets/json/fetchNumbers.json';

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

    //Api call to fetch soldTo numbers--
    fetchSoldToNumbers(){
      if(this.callLocalJson){
        return this.http.get<any>(`${this.fetchSoldToData}`);
      }else{
        return this.http.get(this.apiUrl + "fetchSoldToNumber.json");
      }
    }

    //Api call to fetch numbers--
    fetchNumbers(){
      if(this.callLocalJson){
        return this.http.get<any>(`${this.fetchNumbersData}`);
      }else{
        return this.http.get(this.apiUrl + "fetchSoldToNumber.json");
      }
    }
   

    //Api call to post all requested soldTo numbers--
    postAllRequestedNumbers(obj) : Observable<any>{
    return this.http.post("requestAll" , obj);
  }

  //Api call to post enotifications--

  postEnotification(notificationObj): Observable<any>{
    return this.http.post("sendNotification" , notificationObj);
  }
   

}
