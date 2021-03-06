import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from './home.model';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { envUrl } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.doctorId = this.route.snapshot.paramMap.get('id')
    this.url = envUrl + "patients"
    this.http.post(this.url, { doctorId: this.doctorId }).toPromise().then((data: any) => {
      this.patients = data.patients
    });
  }

  ionViewWillEnter() {
    console.log(this.doctorId)
    this.http.post(this.url, { doctorId: this.doctorId }).toPromise().then((data: any) => {
      this.patients = data.patients
    });
  }

  onAddPatientClick() {
    this.router.navigate(['/add-patient', { id: this.doctorId }]);
  }

}
