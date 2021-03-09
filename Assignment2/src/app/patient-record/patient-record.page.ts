import { Component, OnInit } from '@angular/core';
import { Record } from './patient-record.model'

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.page.html',
  styleUrls: ['./patient-record.page.scss'],
})
export class PatientRecordPage implements OnInit {

  records: Record[] = [
    {
      BP: "90/60 mm",
      RR: "12/min",
      oxyLevel: "98%",
      hRate: "80/min",
      pDate: "Mar 23, 2020"
    },
    {
      BP: "120/50 mm",
      RR: "12/min",
      oxyLevel: "98%",
      hRate: "80/min",
      pDate: "Jan 23, 2020"
    },
    {
      BP: "90/60 mm",
      RR: "12/min",
      oxyLevel: "98%",
      hRate: "80/min",
      pDate: "Dec 11, 2019"
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
