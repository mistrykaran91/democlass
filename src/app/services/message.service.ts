import {
  AlertController,
  PopoverController,
  ToastController
} from '@ionic/angular';
import { Injectable } from '@angular/core';
import { DELETE_CONFIRM } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private popoverController: PopoverController
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

  async successToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      cssClass: `toast-success-back`
    });

    toast.present();
  }

  async confirmation(yesHandler: any, cancelHandler: any = null) {
    const confirm = await this.alertController.create({
      message: DELETE_CONFIRM,
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
