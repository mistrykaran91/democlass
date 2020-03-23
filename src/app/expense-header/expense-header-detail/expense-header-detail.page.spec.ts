import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpenseHeaderDetailPage } from './ExpenseHeader-detail.page';

describe('ExpenseHeaderDetailPage', () => {
  let component: ExpenseHeaderDetailPage;
  let fixture: ComponentFixture<ExpenseHeaderDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseHeaderDetailPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseHeaderDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
