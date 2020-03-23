import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeadSourcePage } from './LeadSource.page';

describe('LeadSourcePage', () => {
  let component: LeadSourcePage;
  let fixture: ComponentFixture<LeadSourcePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeadSourcePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeadSourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
