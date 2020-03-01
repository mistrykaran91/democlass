import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { AuthService, AuthResponseData } from './auth.service';
import { AuthErrorCode } from '../enums/auth-error-code.enum';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  authenticate(email: string, password: string) {
    debugger;
    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then(loadingEl => {
        loadingEl.present();
        let authObs: Observable<any>;
        if (this.isLogin) {
          authObs = this.authService.login(email, password);
        }

        authObs.subscribe(
          resData => {
            console.log(resData);
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/dashboard');
          },
          errRes => {
            loadingEl.dismiss();
            const code = errRes.code;
            let message = 'Could not sign you up, please try again.';
            if (code ===  AuthErrorCode.EmailExist) {
              message = 'This email address exists already!';
            } else if (code ===  AuthErrorCode.InvalidUser) {
              message = 'User is invalid';
            }
            this.showAlert(message);
          }
        );
      });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authenticate(email, password);
    form.reset();
  }

  onForgetPassword(){
    this.router.navigateByUrl('auth/forgot-password');
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed',
        message,
        buttons: ['Ok']
      })
      .then(alertEl => alertEl.present());
  }
}
