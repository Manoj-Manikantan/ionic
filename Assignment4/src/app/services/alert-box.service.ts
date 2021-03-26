import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertBoxService {

  constructor(
    private alertCtrl: AlertController
  ) { }

  async presentAlert(title: string, mssg: string) {
    const alert = await this.alertCtrl.create({
        header: title,
        message: mssg,
        buttons: ['OK']
    });
    await alert.present();
}
}
