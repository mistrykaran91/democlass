import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpenseHeaderPage } from './ExpenseHeader.page';

describe('ExpenseHeaderPage', () => {
  let component: ExpenseHeaderPage;
  let fixture: ComponentFixture<ExpenseHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseHeaderPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
