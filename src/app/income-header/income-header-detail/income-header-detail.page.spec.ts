import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomeHeaderDetailPage } from './IncomeHeader-detail.page';

describe('IncomeHeaderDetailPage', () => {
  let component: IncomeHeaderDetailPage;
  let fixture: ComponentFixture<IncomeHeaderDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeHeaderDetailPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeHeaderDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
