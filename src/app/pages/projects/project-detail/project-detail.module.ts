import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectDetailPage} from './project-detail';
import {ProjectDetailPageRoutingModule} from './project-detail-routing.module';
import {IonicModule} from '@ionic/angular';
import {SharedModule} from '../../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    ProjectDetailPageRoutingModule
  ],
  declarations: [
    ProjectDetailPage,
  ]
})
export class ProjectDetailModule {
}
