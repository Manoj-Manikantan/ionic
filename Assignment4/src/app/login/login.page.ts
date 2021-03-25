import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { envUrl } from '../../environments/environment';
// import { ionAlert } from '../ionAlert/ionAlert'

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
    // private ionAlerts: ionAlert
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
          alert("Login successful!")
        } else if (data.statusCode == "201") {
          alert("Username or password incorrect.")
        } else if (data.statusCode == "202") {
          alert("Username does not exist, Please register.")
          // this.ionAlerts.showAlert("Input Error", "Username does not exist, Please register.")
        }
      });
    } else {
      alert("Please fill all the input fields.")
    }
  }
}
