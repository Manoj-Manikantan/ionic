import { AlertController } from '@ionic/angular';

export class ionAlert {

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

    // showAlert(title: string, mssg: string) {
    //     const alert: any = this.alertCtrl.create({
    //         header: title,
    //         message: mssg,
    //         buttons: ['OK']
    //     });

    //     alert.then((_alert: any) => {
    //         _alert.present();
    //     })
    // }
}


