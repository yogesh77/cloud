import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { BrowserXhr, HttpModule } from '@angular/http';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';


import { FuseSampleModule } from './main/content/sample/sample.module';


import { AppRouterProviders } from './app.routes';
import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material';

import { MatSelectModule, MatProgressBarModule, MatCardModule, MatCheckboxModule, MatSlideToggleModule,
MatIconModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatTooltipModule, MatRadioModule} from '@angular/material';

import { MatDialogModule, MatNativeDateModule,
         MatDatepickerModule, MatSidenavModule, MatToolbarModule, MatListModule, MatSortModule, MatPaginatorModule } from '@angular/material';

import { MatTableModule } from '@angular/material/table';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginService } from './login/login.service';

import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { CookieService, TokenService, RefreshService } from './app.service';
import { AccountsComponent } from './accounts/accounts.component';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ChartModule, CalendarModule, SharedModule, DataTableModule } from 'primeng/primeng';

import { CheckboxModule } from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FaxrecordComponent } from './faxrecord/faxrecord.component';
import { MenuComponent } from './menu/menu.component';


import { RecordsComponent } from './records/records.component';
import { RecordstableComponent } from './recordstable/recordstable.component';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';

import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { SettingComponent } from './setting/setting.component';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { EmailComponent } from './email/email.component';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { BlockedComponent } from './blocked/blocked.component';
import { EmailsettingsComponent } from './emailsettings/emailsettings.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { GrowlModule } from 'primeng/growl';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component'


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        AccountsComponent,
        FaxrecordComponent,
        MenuComponent,
        
        RecordsComponent,
        RecordstableComponent,
        SettingComponent,
        EmailComponent,
        MainmenuComponent,
        BlockedComponent,
        EmailsettingsComponent,
        UserloginComponent,
        UpdateprofileComponent,
        EditprofileComponent,
        /*TableBasicExample,*/
        /*PeriodicElement*/

    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        /*RouterModule.forRoot(appRoutes),*/
        TranslateModule.forRoot(),
        /*DataSource,*/

        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,
        AppRouterProviders,
        FormsModule,
        ShowHidePasswordModule.forRoot(),
        HttpModule,
        TableModule,
        SplitButtonModule,
        SharedModule,
        CheckboxModule,AccordionModule, ProgressSpinnerModule, DataTableModule,
        PanelModule, InputTextModule, CalendarModule, ButtonModule, PasswordModule,        
    MatNativeDateModule, MatDatepickerModule, MatSelectModule, MatSlideToggleModule,
    MatButtonModule, MatProgressSpinnerModule, MatTooltipModule, MatCardModule,
    MatProgressBarModule, MatCheckboxModule, MatInputModule, BrowserAnimationsModule,
    MatDialogModule, MatTableModule, MatRadioModule, CdkTableModule, MatIconModule,
    MatListModule, MatToolbarModule, MatSidenavModule, MatPaginatorModule, MatSortModule,
    CardModule, DropdownModule,

    DialogModule, TabViewModule, ToggleButtonModule, ToastModule,
    MessageModule,MessagesModule, GrowlModule, ReactiveFormsModule

    ],
    bootstrap   : [
        AppComponent
    ],

    providers: [ LoginService, TokenService,]
})
export class AppModule
{
}
