import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeadSourceEditPage } from './LeadSource-edit.page';

describe('LeadSourceEditPage', () => {
  let component: LeadSourceEditPage;
  let fixture: ComponentFixture<LeadSourceEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeadSourceEditPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeadSourceEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
