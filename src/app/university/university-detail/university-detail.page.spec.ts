import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UniversityDetailPage } from './University-detail.page';

describe('UniversityDetailPage', () => {
  let component: UniversityDetailPage;
  let fixture: ComponentFixture<UniversityDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UniversityDetailPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UniversityDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
