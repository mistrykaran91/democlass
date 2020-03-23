import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomeHeaderEditPage } from './IncomeHeader-edit.page';

describe('IncomeHeaderEditPage', () => {
  let component: IncomeHeaderEditPage;
  let fixture: ComponentFixture<IncomeHeaderEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeHeaderEditPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeHeaderEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
