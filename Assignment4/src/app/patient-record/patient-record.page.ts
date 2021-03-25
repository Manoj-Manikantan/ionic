import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Record } from './patient-record.model'
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { envUrl } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.page.html',
  styleUrls: ['./patient-record.page.scss'],
})
export class PatientRecordPage implements OnInit {

  records: Record[];
  url: string;
  patientId: string;
  doctorId: string;

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.doctorId = this.route.snapshot.paramMap.get('doctorId')
    this.patientId = this.route.snapshot.paramMap.get('patientId')
    this.url = envUrl + "patients/getRecords"
    this.http.post(this.url, { patientId: this.patientId }).toPromise().then((data: any) => {
      this.records = data.records
    });
  }

  ionViewWillEnter() {
    this.patientId = this.route.snapshot.paramMap.get('patientId')
    this.http.post(this.url, { patientId: this.patientId }).toPromise().then((data: any) => {
      this.records = data.records
    });
  }

  onAddPatientRecordClick() {
    this.router.navigate(['/add-patient-record', { patientId: this.patientId }]);
  }

  onBackButtonClick(){
    this.router.navigate(['/patient-info', { patientId: this.patientId }]);
  }

}
