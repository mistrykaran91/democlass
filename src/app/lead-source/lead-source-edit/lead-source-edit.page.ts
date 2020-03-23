import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import * as Actions from '@app/actions';
import * as Reducers from '@app/reducers';
import * as Selectors from '@app/selectors';
import { LeadSource } from '@interfaces/lead-source.interface';
import { Status } from '@enums/status.enum';

@Component({
  selector: 'app-lead-source-edit',
  templateUrl: './lead-source-edit.page.html',
  styleUrls: ['./lead-source-edit.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeadSourceEditPage implements OnInit {
  leadSourceForm: FormGroup;
  leadSource: LeadSource;
  Status = Status;

  constructor(
    private store: Store<Reducers.LeadSourceState>,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const leadSourceId = +this.activatedRoute.snapshot.paramMap.get(
      'leadSourceId'
    );
    this.store.dispatch(Actions.loadLeadSourceById({ leadSourceId }));

    this.store.select(Selectors.getCurrentLeadSource).subscribe(leadSource => {
      this.leadSource = leadSource;
      if (this.leadSource) {
        this.leadSourceForm = this.createMainForm();
        this.leadSourceForm.patchValue(this.leadSource);
      }
    });
  }

  createMainForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      displayOrder: [''],
      status: ['']
    });
  }

  save(): void {
    if (this.leadSourceForm.invalid) {
      return;
    }

    const leadSource: LeadSource = {
      ...this.leadSource,
      ...this.leadSourceForm.value
    };

    if (!leadSource.id) {
      this.store.dispatch(Actions.createLeadSource({ leadSource }));
    } else {
      this.store.dispatch(Actions.updateLeadSource({ leadSource }));
    }
  }

  get title() {
    if (!this.leadSource || !this.leadSource.id) {
      return 'Add LeadSource';
    }
    return 'Edit LeadSource';
  }
}
