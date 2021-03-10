import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user: any = {};

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private http: HttpClient
  ) { }

  url = "http://192.168.0.114:3009/doctor/signup"

  onRegisterClick() {
    if ((this.user.Name != null) && (this.user.Email != null) && (this.user.Pass != null)) {
      this.http.post(this.url, this.user).toPromise().then((data: any) => {
        if (data.statusCode == "200") {
          alert("Registration successful!")
        } else if (data.statusCode == "201") {
          alert("Email Id already in use.")
        }
      });
    } else {
      alert("Please fill all the input fields.")
    }
  }
}
