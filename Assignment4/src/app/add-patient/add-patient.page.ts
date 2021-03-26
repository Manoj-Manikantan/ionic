import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { envUrl } from '../../environments/environment';
import { AlertBoxService } from '../services/alert-box.service'

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {
  patient: any = {};
  url: string;
  doctorId: string;

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private http: HttpClient,
    private alertBox: AlertBoxService
  ) { }

  ngOnInit() {
    this.url = envUrl + "addPatient"
    this.doctorId = localStorage.getItem('userId')
    this.patient.doctorId = this.doctorId
  }

  onAddPatientClick() {
    if (this.patient.fullName && this.patient.email && this.patient.mobileNum
      && this.patient.age && this.patient.bloodType && this.patient.address) {
      this.http.post(this.url, this.patient).toPromise().then((data: any) => {
        if (data.statusCode == "200") {
          this.router.navigate(['/home']);
          this.alertBox.presentAlert("Success", "Patient added successfully!")
        }
      });
    } else {
      this.alertBox.presentAlert("Input Error", "Please fill all the input fields.")
    }
  }

  onBackClick() {
    this.router.navigate(['/home']);
  }
}
