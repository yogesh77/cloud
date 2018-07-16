import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseSampleComponent } from './sample.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatRadioModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { FaxRecordsComponent } from '../faxrecords/faxrecords.component';

const routes = [
    {
        path     : 'sample',
        component: FuseSampleComponent
    },
    {
        path     : 'faxrecords',
        component: FaxRecordsComponent        
    }
];

@NgModule({
    declarations: [
        FuseSampleComponent, FaxRecordsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule, MatSidenavModule
    ],
    exports     : [
        FuseSampleComponent
    ]
})

export class FuseSampleModule
{
}
