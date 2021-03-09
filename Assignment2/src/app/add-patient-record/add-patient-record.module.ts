import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPatientRecordPageRoutingModule } from './add-patient-record-routing.module';

import { AddPatientRecordPage } from './add-patient-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPatientRecordPageRoutingModule
  ],
  declarations: [AddPatientRecordPage]
})
export class AddPatientRecordPageModule {}
