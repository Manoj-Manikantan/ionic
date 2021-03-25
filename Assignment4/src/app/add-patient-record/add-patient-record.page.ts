import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { envUrl } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-patient-record',
  templateUrl: './add-patient-record.page.html',
  styleUrls: ['./add-patient-record.page.scss'],
})
export class AddPatientRecordPage implements OnInit {
  record: any = {};
  url: string;
  patientId: string;

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.url = envUrl + "patients/addRecord"
    this.patientId = this.route.snapshot.paramMap.get('patientId')
    this.record.patientId = this.patientId
  }

  onAddPatientRecordClick() {
    if (this.record.bloodPressure && this.record.respiratoryRate && this.record.oxygenLevel
      && this.record.heartbeatRate) {
      this.http.post(this.url, this.record).toPromise().then((data: any) => {
        if (data.statusCode == "200") {
          this.router.navigate(['/patient-record', { patientId: this.patientId }]);
          alert("Patient added successfully!")
        }
      });
    } else {
      alert("Please fill all the input fields.")
    }
  }

  onBackButtonClick(){
    this.router.navigate(['/patient-record', { patientId: this.patientId }]);
  }


}
