import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { FuseMainComponent } from './main/main.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FaxrecordComponent } from './faxrecord/faxrecord.component';
import { MenuComponent } from './menu/menu.component';
import { RecordstableComponent } from './recordstable/recordstable.component';

export const routes: Routes = [

{
	path: 'login',
    component: LoginComponent,    
},

{
	path: 'dashboard',
	component: DashboardComponent,

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
}

];

export const AppRouterProviders = RouterModule.forRoot(routes);