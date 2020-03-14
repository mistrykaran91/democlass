import {
  AlertController,
  PopoverController,
  ToastController
} from '@ionic/angular';
import { Injectable } from '@angular/core';
import { DELETE_CONFIRM } from '../app.constant';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private popoverController: PopoverController,
    private loadingController: LoadingController
  ) {}

  async errorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      cssClass: 'toast-error-back'
    });

    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });

    return loading.present();
  }

  async dismissLoader() {
    const loader = await this.loadingController.getTop();
    return loader && loader.dismiss();
  }

  async successToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      cssClass: `toast-success-back`
    });

    toast.present();
  }

  async confirmation(
    message: string,
    yesHandler: any,
    cancelHandler: any = null
  ) {
    const confirm = await this.alertController.create({
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: cancelHandler
        },
        {
          text: 'Yes',
          role: 'yes',
          handler: yesHandler
        }
      ]
    });

    await confirm.present();
  }

  async presentPopover(page: any, event: any) {
    const popover = await this.popoverController.create({
      component: page,
      translucent: true,
      event: event
    });
    popover.present();
  }
}
