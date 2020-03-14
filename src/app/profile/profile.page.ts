import { Component } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service';
import { UserProfile } from '../interfaces/user-profile.interface';
import { Gender } from '../enums/gender.enum';
import { MessageService } from '../services/message.service';
import {
  PROFILE_UPDATED_SUCCESS,
  MORE_INFO,
  LESS_INFO
} from './profile.constant';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage {
  showInformation = false;
  userProfile: UserProfile = null;
  Gender = Gender;
  userProfileTitle: string;

  constructor(
    private userProfileService: UserProfileService,
    private messageService: MessageService,
    private navController: NavController,
  ) {}

  ionViewWillEnter() {
    this.getUserProfile();
  }

  getUserProfile(event?: any) {
    this.userProfileService.userProfile$.subscribe(userProfile => {
      this.userProfile = userProfile;
      this.userProfileTitle = `${userProfile.firstName} ${userProfile.lastName}`;
      if (event) {
        event.target.complete();
      }
    });
  }

  save() {
    if (this.userProfile && this.userProfile.id) {
      this.userProfileService
        .updateUserProfile(this.userProfile)
        .subscribe(userProfile => {
          this.userProfile = userProfile;
          this.messageService.successToast(PROFILE_UPDATED_SUCCESS);
          this.navController.back();
        });
    }
  }

  showInformationToggle() {
    this.showInformation = !this.showInformation;
  }

  get showInformationText() {
    return !this.showInformation ? MORE_INFO : LESS_INFO;
  }

  get showInformationIcon() {
    return !this.showInformation ? 'arrow-down' : 'arrow-up';
  }
}
