import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import * as Actions from '@app/actions';
import * as Reducers from '@app/reducers';
import * as Selectors from '@app/selectors';
import { University } from '@interfaces/university.interface';

@Component({
  selector: 'app-university-edit',
  templateUrl: './university-edit.page.html',
  styleUrls: ['./university-edit.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversityEditPage implements OnInit {
  universityForm: FormGroup;
  university: University;

  constructor(
    private store: Store<Reducers.UniversityState>,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const universityId = +this.activatedRoute.snapshot.paramMap.get(
      'universityId'
    );
    this.store.dispatch(Actions.loadUniversityById({ universityId }));

    this.store.select(Selectors.getCurrentUniversity).subscribe(university => {
      this.university = university;
      if (this.university) {
        this.universityForm = this.createMainForm();
        this.universityForm.patchValue(this.university);
      }
    });
  }

  createMainForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      displayOrder: [''],
      status: [''],
      avatar: ['']
    });
  }

  save(): void {
    if (this.universityForm.invalid) {
      return;
    }

    const university: University = {
      ...this.university,
      ...this.universityForm.value
    };

    if (!university.id) {
      this.store.dispatch(Actions.createUniversity({ university }));
    } else {
      this.store.dispatch(Actions.updateUniversity({ university }));
    }
  }
}
