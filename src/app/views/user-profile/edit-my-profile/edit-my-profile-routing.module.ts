import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
    {
        path: '',
        component: EditMyProfileComponent,
        children: [
            {
                path: '',
                redirectTo: 'editContactInformation',
                pathMatch: 'full'
            },
            {
                path: 'enrollForApplications',
                component: EnrollForApplicationsComponent,
                data: {
                    title: 'Enroll For Applications'
                },
            },
            {
                path: 'editAddressInformation',
                component: EditAddressInformationComponent,
                data: {
                    title: 'Edit Address Information'
                },
            },
            {
                path: 'viewRequestRoles',
                component: ViewRequestRolesComponent,
                data: {
                    title: 'View Request Roles'
                },
            },
            {
                path: 'acceptedEula',
                component: AcceptedEulaComponent,
                data: {
                    title: 'Accepted Eula'
                },
            },
            {
                path: 'editPreference',
                component: EditPreferenceComponent,
                data: {
                    title: 'Edit Preference'
                },
            },
            {
                path: 'changeSecurityQuestion',
                component: ChangeSecurityQuestionComponent,
                data: {
                    title: 'Change Security Question'
                },
            },
            {
                path: 'changePassword',
                component: ChangePasswordComponent,
                data: {
                    title: 'Change Password'
                },
            },
            {
                path: 'requestUserAccessType',
                component: RequestUserAccessTypeComponent,
                data: {
                    title: 'Request User Access Type'
                },
            },
            {
                path: 'requestUserType',
                component: RequestUserTypeComponent,
                data: {
                    title: 'Request User Type'
                },
            },
            {
                path: 'editContactInformation',
                component: EditContactInformationComponent,
                data: {
                    title: 'Edit Contact Information'
                },
            },
        ]
    }


];

@NgModule({
    declarations: [],
    exports: [RouterModule],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class EditMyProfileRoutingModule { }


