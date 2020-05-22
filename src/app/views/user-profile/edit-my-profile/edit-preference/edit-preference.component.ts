import { Component, OnInit } from '@angular/core';
import { UserProfileService } from "../../../../shared/services/user-profile.service";

@Component({
  selector: 'app-edit-preference',
  templateUrl: './edit-preference.component.html',
  styleUrls: ['./edit-preference.component.css']
})
export class EditPreferenceComponent implements OnInit {
  preferenceInfo: any = {};
  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.fetchPreferences();
  }

  fetchPreferences(){
    this.userProfileService.fetchPreferences().subscribe(
      response => {
        this.preferenceInfo = response.preferenceInfo;
      }, error => {
        this.preferenceInfo = {}
      }, () => {

      }
    );
  }

}
