import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UniversityEditPage } from './University-edit.page';

describe('UniversityEditPage', () => {
  let component: UniversityEditPage;
  let fixture: ComponentFixture<UniversityEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UniversityEditPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UniversityEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
