import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomeHeaderPage } from './IncomeHeader.page';

describe('IncomeHeaderPage', () => {
  let component: IncomeHeaderPage;
  let fixture: ComponentFixture<IncomeHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeHeaderPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
