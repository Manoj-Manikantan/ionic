import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientRecordPageRoutingModule } from './patient-record-routing.module';

import { PatientRecordPage } from './patient-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientRecordPageRoutingModule
  ],
  declarations: [PatientRecordPage]
})
export class PatientRecordPageModule {}
