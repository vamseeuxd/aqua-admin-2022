import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {ProjectListPage} from './project-list';
import {ProjectListPageRoutingModule} from './project-list-routing.module';
import {SharedModule} from '../../../shared.module';
import {AddOrEditProjectComponent} from './add-or-edit-project/add-or-edit-project.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    ProjectListPageRoutingModule
  ],
  declarations: [
    AddOrEditProjectComponent,
    ProjectListPage
  ],
})
export class ProjectListModule {
}
