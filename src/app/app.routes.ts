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

export const routes: Routes = [

{
	path: 'email',
    component: EmailComponent,    
},

{
	path: 'login',
    component: LoginComponent,    
},

{
	path: 'login',
    component: LoginComponent,    
},

{
	path: 'dashboard',
	component: DashboardComponent,

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
}

];

export const AppRouterProviders = RouterModule.forRoot(routes);