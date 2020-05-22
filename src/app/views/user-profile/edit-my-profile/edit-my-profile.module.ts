import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollForApplicationsComponent } from '../edit-my-profile/enroll-for-applications/enroll-for-applications.component';
import { EditAddressInformationComponent } from '../edit-my-profile/edit-address-information/edit-address-information.component';
import { ViewRequestRolesComponent } from '../edit-my-profile/view-request-roles/view-request-roles.component';
import { AcceptedEulaComponent } from '../edit-my-profile/accepted-eula/accepted-eula.component';
import { EditPreferenceComponent } from '../edit-my-profile/edit-preference/edit-preference.component';
import { ChangeSecurityQuestionComponent } from '../edit-my-profile/change-security-question/change-security-question.component';
import { ChangePasswordComponent } from '../edit-my-profile/change-password/change-password.component';
import { RequestUserAccessTypeComponent } from '../edit-my-profile/request-user-access-type/request-user-access-type.component';
import { RequestUserTypeComponent } from '../edit-my-profile/request-user-type/request-user-type.component';
import { EditContactInformationComponent } from '../edit-my-profile/edit-contact-information/edit-contact-information.component';
import { EditMyProfileComponent } from '../edit-my-profile/edit-my-profile.component';

import { EditMyProfileRoutingModule } from './edit-my-profile-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditMyProfileComponent, EnrollForApplicationsComponent, EditAddressInformationComponent, ViewRequestRolesComponent, AcceptedEulaComponent, EditPreferenceComponent, ChangeSecurityQuestionComponent, ChangePasswordComponent, RequestUserAccessTypeComponent, RequestUserTypeComponent, EditContactInformationComponent],
  imports: [
    CommonModule,
    EditMyProfileRoutingModule,
    FormsModule
  ],
})
export class EditMyProfileModule { }
