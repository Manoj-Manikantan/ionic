import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { envUrl } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.page.html',
  styleUrls: ['./patient-info.page.scss'],
})
export class PatientInfoPage implements OnInit {

  doctorId: string;
  patientId: string;
  url: string;
  fullName: string;
  email: string;
  mobileNum: string;
  age: string;
  bloodType: string;
  address: string;

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.doctorId = localStorage.getItem('userId')
    this.patientId = this.route.snapshot.paramMap.get('patientId')
    this.url = envUrl + "patients/detail"
    this.http.post(this.url, { patientId: this.patientId }).toPromise().then((data: any) => {
      this.fullName = data.patient.fullName
      this.email = data.patient.email
      this.mobileNum = data.patient.mobileNum
      this.age = data.patient.age
      this.bloodType = data.patient.bloodType
      this.address = data.patient.address
    });
  }

  onBackClick() {
    this.router.navigate(['/home']);
  }

  onViewRecordsClick() {
    this.router.navigate(['/patient-record', { patientId: this.patientId }]);
  }
}
