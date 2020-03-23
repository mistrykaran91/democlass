import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeadSourceDetailPage } from './LeadSource-detail.page';

describe('LeadSourceDetailPage', () => {
  let component: LeadSourceDetailPage;
  let fixture: ComponentFixture<LeadSourceDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeadSourceDetailPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeadSourceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
