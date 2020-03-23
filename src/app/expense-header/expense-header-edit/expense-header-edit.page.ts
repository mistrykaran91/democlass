import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import * as Actions from '@app/actions';
import * as Reducers from '@app/reducers';
import * as Selectors from '@app/selectors';
import { ExpenseHeader } from '@interfaces/expense-header.interface';
import { Status } from '@enums/status.enum';

@Component({
  selector: 'app-expense-header-edit',
  templateUrl: './expense-header-edit.page.html',
  styleUrls: ['./expense-header-edit.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseHeaderEditPage implements OnInit {
  expenseHeaderForm: FormGroup;
  expenseHeader: ExpenseHeader;
  Status = Status;
  
  constructor(
    private store: Store<Reducers.ExpenseHeaderState>,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const expenseHeaderId = +this.activatedRoute.snapshot.paramMap.get(
      'expenseHeaderId'
    );
    this.store.dispatch(Actions.loadExpenseHeaderById({ expenseHeaderId }));

    this.store
      .select(Selectors.getCurrentExpenseHeader)
      .subscribe(expenseHeader => {
        this.expenseHeader = expenseHeader;
        if (this.expenseHeader) {
          this.expenseHeaderForm = this.createMainForm();
          this.expenseHeaderForm.patchValue(this.expenseHeader);
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
    if (this.expenseHeaderForm.invalid) {
      return;
    }

    const expenseHeader: ExpenseHeader = {
      ...this.expenseHeader,
      ...this.expenseHeaderForm.value
    };

    if (!expenseHeader.id) {
      this.store.dispatch(Actions.createExpenseHeader({ expenseHeader }));
    } else {
      this.store.dispatch(Actions.updateExpenseHeader({ expenseHeader }));
    }
  }

  get title() {
    if (!this.expenseHeader || !this.expenseHeader.id) {
      return 'Add ExpenseHeader';
    }
    return 'Edit ExpenseHeader';
  }
}
