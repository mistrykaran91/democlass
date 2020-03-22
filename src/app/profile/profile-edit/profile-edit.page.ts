import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { UserProfile } from '../../interfaces/user-profile.interface';
import { FormGroup } from '@angular/forms';
import { MORE_INFO, LESS_INFO } from '@app/app.constant';
import { Gender } from '@enums/gender.enum';

@Component({
  selector: 'profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditPage implements OnInit {
  @Input()
  userProfile: UserProfile;

  @Input()
  userProfileForm: FormGroup;

  @Input()
  userProfileTitle: string;
  Gender = Gender;

  showInformation = false;

  constructor() {}

  ngOnInit() {
    this.userProfileForm.patchValue(this.userProfile);
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
