import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  public loading:HTMLIonLoadingElement;

  constructor(
    private toast: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  public async showToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 5000,
      buttons: ['OK']
    });
    toast.present();
  }

  async showLoading(message?: string, duration?: number) {
    this.loading = await this.loadingCtrl.create({
      message: message ? message : null,
      duration: duration ? duration : null
    });
    return this.loading.present();
  }

  async dismissLoading() {
    return this.loading.dismiss();
  }

}
