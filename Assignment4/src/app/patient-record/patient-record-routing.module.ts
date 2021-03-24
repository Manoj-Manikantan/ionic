import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientRecordPage } from './patient-record.page';

const routes: Routes = [
  {
    path: '',
    component: PatientRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRecordPageRoutingModule {}
