import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    IonicModule
} from '@ionic/angular';
import {
    IonicStorageModule
} from '@ionic/storage';
import {
    ApperyioModule
} from "./scripts/apperyio/apperyio.module";
import {
    PipesModule
} from './scripts/pipes.module';
import {
    DirectivesModule
} from './scripts/directives.module';
import {
    ComponentsModule
} from './scripts/components.module';
import {
    CustomModulesModule
} from './scripts/custom-modules.module';
import {
    app
} from './app';
import {
    AppRoutingModule
} from './app-routing.module';
import {
    ExportedClass as SocialSharingService
} from './scripts/custom/SocialSharingService_Impl';
import {
    ExportedClass as GetProfileService
} from './scripts/services/GetProfileService';
import {
    ExportedClass as UpdateProfileService
} from './scripts/services/UpdateProfileService';
import {
    ExportedClass as SignupService
} from './scripts/services/SignupService';
import {
    ExportedClass as LogoutService
} from './scripts/services/LogoutService';
import {
    ExportedClass as LoginService
} from './scripts/services/LoginService';
import {
    ExportedClass as LoginDB_Userdisplay_list_service
} from './scripts/services/LoginDB_Userdisplay_list_service';
import {
    ExportedClass as SignUp
} from './scripts/services/SignUp';
import {
    ExportedClass as LoginDB_bugReports_create_service
} from './scripts/services/LoginDB_bugReports_create_service';
import {
    ExportedClass as LoginDB_Userdisplay_read_service
} from './scripts/services/LoginDB_Userdisplay_read_service';
import {
    ExportedClass as LoginDB_login_service
} from './scripts/services/LoginDB_login_service';
import {
    ExportedClass as LoginDB_Userdisplay_query_service
} from './scripts/services/LoginDB_Userdisplay_query_service';
import {
    ExportedClass as FormUtils
} from './scripts/custom/FormUtils';
import {
    ExportedClass as SetCurrentThemeService_Impl
} from './scripts/custom/SetCurrentThemeService_Impl';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    Keyboard
} from '@ionic-native/keyboard/ngx';
@NgModule({
    declarations: [
        app
    ],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(),
        HttpClientModule,
        ApperyioModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        CustomModulesModule,
        IonicStorageModule.forRoot(),
        AppRoutingModule
    ],
    bootstrap: [
        app
    ],
    entryComponents: [
        //app
    ],
    providers: [
        StatusBar,
        SplashScreen,
        WebView,
        Device,
        Keyboard,
        SocialSharingService,
        GetProfileService,
        UpdateProfileService,
        SignupService,
        LogoutService,
        LoginService,
        LoginDB_Userdisplay_list_service,
        SignUp,
        LoginDB_bugReports_create_service,
        LoginDB_Userdisplay_read_service,
        LoginDB_login_service,
        LoginDB_Userdisplay_query_service,
        FormUtils,
        SetCurrentThemeService_Impl,
    ]
})
export class AppModule {}