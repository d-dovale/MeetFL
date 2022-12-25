import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
import {
    Routes
} from '@angular/router';
import {
    IonicModule
} from '@ionic/angular';
import {
    Tabs
} from './Tabs';
import {
    PipesModule
} from '../scripts/pipes.module';
import {
    DirectivesModule
} from '../scripts/directives.module';
import {
    ComponentsModule
} from '../scripts/components.module';
import {
    CustomModulesModule
} from '../scripts/custom-modules.module';
const routes: Routes = [{
    path: '',
    component: Tabs,
    children: [{
            path: 'Profile',
            children: [{
                path: '',
                loadChildren: '../Profile/Profile.module#ProfilePageModule'
            }]
        },
        {
            path: 'Home',
            children: [{
                path: '',
                loadChildren: '../Home/Home.module#HomePageModule'
            }]
        },
        {
            path: 'Settings',
            children: [{
                path: '',
                loadChildren: '../Settings/Settings.module#SettingsPageModule'
            }]
        },
        {
            path: '',
            redirectTo: 'Home',
            pathMatch: 'full'
        }
    ]
}];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PageRoutingModule {}
@NgModule({
    declarations: [
        Tabs
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        CustomModulesModule, PageRoutingModule
    ],
    exports: [
        Tabs
    ]
})
export class TabsPageModule {}