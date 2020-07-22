import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './reducers';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {RouterModule} from '@angular/router';
import {AdminRoutes} from './admin.routing';



@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducers, { metaReducers: fromAdmin.metaReducers })
  ],
  bootstrap: [AdminPageComponent]
})
export class AdminModule { }
