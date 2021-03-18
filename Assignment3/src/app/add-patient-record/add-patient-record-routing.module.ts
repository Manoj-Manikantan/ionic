import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPatientRecordPage } from './add-patient-record.page';

const routes: Routes = [
  {
    path: '',
    component: AddPatientRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPatientRecordPageRoutingModule {}
