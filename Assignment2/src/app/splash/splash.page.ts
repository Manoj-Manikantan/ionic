import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log("Enters function called")
    setTimeout(() => {
      console.log("Timeout called")
      this.router.navigateByUrl('login')
    }, 3000);
  }

}
