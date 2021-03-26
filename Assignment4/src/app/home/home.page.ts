import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from './home.model';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { envUrl } from '../../environments/environment';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  doctorId: string;
  url: string;
  patients: Patient[];

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private http: HttpClient,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.doctorId = localStorage.getItem('userId')
    this.url = envUrl + "patients"
    this.http.post(this.url, { doctorId: this.doctorId }).toPromise().then((data: any) => {
      this.patients = data.patients
    });
  }

  ionViewWillEnter() {
    this.doctorId = localStorage.getItem('userId')
    this.http.post(this.url, { doctorId: this.doctorId }).toPromise().then((data: any) => {
      this.patients = data.patients
    });
  }

  onAddPatientClick() {
    this.router.navigate(['/add-patient']);
  }

  onClickPatientInfo(patientId: string) {
    this.router.navigate(['/patient-info', { patientId: patientId }]);
  }

  onLogoutClick() {
    this.presentAlertConfirm()
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            localStorage.setItem('authenticated', '0')
            this.router.navigate(['/login']);
            console.log('Confirm Okay');
          }
        }, {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel!');
          }
        }
      ]
    });
    await alert.present();
  }
}
