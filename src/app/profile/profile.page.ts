import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserProfile } from '../interfaces/user-profile.interface';

import * as Actions from '../actions';
import * as Reducers from '../reducers';
import * as Selectors from '../selectors/index';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePage implements OnInit {
  userProfileForm: FormGroup;

  userProfile$: Observable<UserProfile> = this.store.select(
    Selectors.getUserProfile
  );
  userProfileTitle$: Observable<string> = this.store.select(
    Selectors.getUserProfileTitle
  );

  constructor(
    private store: Store<Reducers.UserProfileState>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.store.dispatch(Actions.loadUserProfile());
  }

  createForm(): void {
    this.userProfileForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      gender: [''],
      mobile: [''],
      profileDescription: [''],
      dob: [''],
      password: [''],
      branchId: [''],
      roleId: [''],
      contactDetails: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        landmark: [''],
        city: [''],
        state: [''],
        country: [''],
        pincode: ['']
      })
    });
  }

  save() {
    if (this.userProfileForm.invalid) {
      return;
    }

    this.store.dispatch(
      Actions.updateUserProfile({ userProfile: this.userProfileForm.value })
    );
  }
}
