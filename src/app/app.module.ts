import { NgModule, } from '@angular/core';
import { FormsModule }    from '@angular/forms';
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

import { MatDialogModule, MatNativeDateModule, MatTableModule,
         MatDatepickerModule, MatSidenavModule, MatToolbarModule, MatListModule, MatSortModule, MatPaginatorModule } from '@angular/material';

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
import { DialogComponent } from './dialog/dialog.component';

/*const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'sample'
    }
];*/

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        AccountsComponent,
        FaxrecordComponent,
        MenuComponent,
        DialogComponent

    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        /*RouterModule.forRoot(appRoutes),*/
        TranslateModule.forRoot(),

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
        
        
    MatNativeDateModule, MatDatepickerModule, MatSelectModule, MatSlideToggleModule,
    MatButtonModule, MatProgressSpinnerModule, MatTooltipModule, MatCardModule,
    MatProgressBarModule, MatCheckboxModule, MatInputModule, BrowserAnimationsModule,
    MatDialogModule, MatTableModule, MatRadioModule, CdkTableModule, MatIconModule,
    MatListModule, MatToolbarModule, MatSidenavModule, MatPaginatorModule, MatSortModule


    ],
    bootstrap   : [
        AppComponent
    ],

    providers: [ LoginService, TokenService]
})
export class AppModule
{
}
