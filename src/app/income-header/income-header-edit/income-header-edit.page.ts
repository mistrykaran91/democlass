import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import * as Actions from '@app/actions';
import * as Reducers from '@app/reducers';
import * as Selectors from '@app/selectors';
import { IncomeHeader } from '@interfaces/income-header.interface';
import { Status } from '@enums/status.enum';

@Component({
  selector: 'app-income-header-edit',
  templateUrl: './income-header-edit.page.html',
  styleUrls: ['./income-header-edit.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncomeHeaderEditPage implements OnInit {
  incomeHeaderForm: FormGroup;
  incomeHeader: IncomeHeader;
  Status = Status;
  
  constructor(
    private store: Store<Reducers.IncomeHeaderState>,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const incomeHeaderId = +this.activatedRoute.snapshot.paramMap.get(
      'incomeHeaderId'
    );
    this.store.dispatch(Actions.loadIncomeHeaderById({ incomeHeaderId }));

    this.store
      .select(Selectors.getCurrentIncomeHeader)
      .subscribe(incomeHeader => {
        this.incomeHeader = incomeHeader;
        if (this.incomeHeader) {
          this.incomeHeaderForm = this.createMainForm();
          this.incomeHeaderForm.patchValue(this.incomeHeader);
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
    if (this.incomeHeaderForm.invalid) {
      return;
    }

    const incomeHeader: IncomeHeader = {
      ...this.incomeHeader,
      ...this.incomeHeaderForm.value
    };

    if (!incomeHeader.id) {
      this.store.dispatch(Actions.createIncomeHeader({ incomeHeader }));
    } else {
      this.store.dispatch(Actions.updateIncomeHeader({ incomeHeader }));
    }
  }

  get title() {
    if (!this.incomeHeader || !this.incomeHeader.id) {
      return 'Add IncomeHeader';
    }
    return 'Edit IncomeHeader';
  }
}
