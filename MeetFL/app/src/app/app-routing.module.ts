import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
const routes: Routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'profile4',
        loadChildren: './Profile/Profile.module#ProfilePageModule',
    },
    {
        path: 'login',
        loadChildren: './Login/Login.module#LoginPageModule',
    },
    {
        path: 'signup',
        loadChildren: './SignUp/SignUp.module#SignUpPageModule',
    },
    {
        path: 'privacypolicy',
        loadChildren: './PrivacyPolicy/PrivacyPolicy.module#PrivacyPolicyPageModule',
    },
    {
        path: 'termsofservice',
        loadChildren: './TermsOfService/TermsOfService.module#TermsOfServicePageModule',
    },
    {
        path: 'bugreporting',
        loadChildren: './BugReporting/BugReporting.module#BugReportingPageModule',
    },
    {
        path: 'tabs',
        loadChildren: './Tabs/Tabs.module#TabsPageModule',
    },
    {
        path: 'socialsharingscreen',
        loadChildren: './SocialSharingScreen/SocialSharingScreen.module#SocialSharingScreenPageModule',
    },
    {
        path: 'termsofservice_settings',
        loadChildren: './TermsOfService_Settings/TermsOfService_Settings.module#TermsOfService_SettingsPageModule',
    },
    {
        path: 'privacypolicy_settings',
        loadChildren: './PrivacyPolicy_Settings/PrivacyPolicy_Settings.module#PrivacyPolicy_SettingsPageModule',
    },
];
@NgModule({
    imports: [RouterModule.forRoot(
        routes, {
            enableTracing: false,
            useHash: true
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}