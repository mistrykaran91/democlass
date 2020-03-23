import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpenseHeaderEditPage } from './ExpenseHeader-edit.page';

describe('ExpenseHeaderEditPage', () => {
  let component: ExpenseHeaderEditPage;
  let fixture: ComponentFixture<ExpenseHeaderEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseHeaderEditPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseHeaderEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
