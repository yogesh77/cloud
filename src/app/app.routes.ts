import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { FuseMainComponent } from './main/main.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FaxrecordComponent } from './faxrecord/faxrecord.component';
import { MenuComponent } from './menu/menu.component';
import { RecordstableComponent } from './recordstable/recordstable.component';
import { RecordsComponent } from './records/records.component';
import { SettingComponent } from './setting/setting.component';
import { EmailComponent } from './email/email.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { BlockedComponent } from './blocked/blocked.component';

export const routes: Routes = [

{ path: '', component: LoginComponent },
{ path: 'login/:token', component: LoginComponent },
{ path: 'login/:token/:id', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'mainmenu', component: MainmenuComponent,

// { path: 'mainmenu', component: MainmenuComponent,

children:[

{
	path: 'dashboard',
	component: DashboardComponent,

},

{
	path: 'blocked',
	component: BlockedComponent,

},

{
	path: 'email',
    component: EmailComponent,    
},

{
	path: 'login',
    component: LoginComponent,    
},


{
	path: 'records',
	component: RecordsComponent,

},
{

	path: 'recordstable',
	component: RecordstableComponent,
},
{

	path: 'accounts',
	component: AccountsComponent,
},
{
	path: 'faxrecord',
	component: FaxrecordComponent,
},

/*{
	path: 'sample',
	component: FuseSampleModule,
},*/
{
	path: 'menu',
	component: MenuComponent,
},

{
	path: 'main',
	component: FuseMainComponent,
},
{
	path: 'setting',
	component: SettingComponent,
},
{
	path: 'mainmenu',
	component: MainmenuComponent,
},
{
        path: ' ',
       redirectTo: 'mainmenu',
      },
],
}
];

export const AppRouterProviders = RouterModule.forRoot(routes);