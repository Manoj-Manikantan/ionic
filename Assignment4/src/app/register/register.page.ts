import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { envUrl } from '../../environments/environment';
import { AlertBoxService } from '../services/alert-box.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user: any = {};

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private alertBox: AlertBoxService
  ) { }

  url = envUrl + "doctor/signup"

  onRegisterClick() {
    if (this.user.userName && this.user.email && this.user.password) {
      this.http.post(this.url, this.user).toPromise().then((data: any) => {
        if (data.statusCode == "200") {
          this.alertBox.presentAlert("Success", "Registration successful! Please proceed to Sign In Screen.")
        } else if (data.statusCode == "201") {
          alert("Email Id already in use.")
          this.alertBox.presentAlert("Input Error", "Email Id already in use.")
        }
      });
    } else {
      this.alertBox.presentAlert("Input Error", "Please fill all the input fields.")
    }
  }
}
