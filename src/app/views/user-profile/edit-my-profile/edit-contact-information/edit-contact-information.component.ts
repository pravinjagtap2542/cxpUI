import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserProfileService } from "../../../../shared/services/user-profile.service"

@Component({
  selector: 'app-edit-contact-information',
  templateUrl: './edit-contact-information.component.html',
  styleUrls: ['./edit-contact-information.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditContactInformationComponent implements OnInit {
  contactInfo: any = {};

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.fetchContactInformation();
  }

  fetchContactInformation(){
    this.userProfileService.fetchContactInformation().subscribe(
      response => {
        this.contactInfo = response.contactinfo;
      }, error => {
        this.contactInfo = {}
      }, () => {
        
      }
    );
  }


}
