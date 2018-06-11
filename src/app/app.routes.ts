import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { FuseMainComponent } from './main/main.component';
import { AccountsComponent } from './accounts/accounts.component';

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

	path: 'accounts',
	component: AccountsComponent,
},

/*{
	path: 'sample',
	component: FuseSampleModule,
},*/

{
	path: 'main',
	component: FuseMainComponent,
}

];

export const AppRouterProviders = RouterModule.forRoot(routes);