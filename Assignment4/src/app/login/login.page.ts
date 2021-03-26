import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { envUrl } from '../../environments/environment';
import { AlertBoxService } from '../services/alert-box.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any = {};

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private http: HttpClient,
    private alertBox: AlertBoxService
  ) { }

  ngOnInit() {
  }

  url = envUrl + "doctor/login"

  onLoginClick() {
    if (this.user.userName && this.user.password) {
      this.http.post(this.url, this.user).toPromise().then((data: any) => {
        if (data.statusCode == "200") {
          this.router.navigate(['/home']);
          localStorage.setItem('userId', data.doctor._id)
          this.alertBox.presentAlert("Success", "Login successful!")
        } else if (data.statusCode == "201") {
          this.alertBox.presentAlert("Input Error", "Username or password incorrect.")
        } else if (data.statusCode == "202") {
          this.alertBox.presentAlert("Input Error", "Username does not exist, Please proceed to register screen.")
        }
      });
    } else {
      this.alertBox.presentAlert("Input Error", "Please fill all the input fields.")
    }
  }
}
