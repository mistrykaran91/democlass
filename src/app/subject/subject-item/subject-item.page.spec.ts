import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubjectItemPage } from './subject-item.page';

describe('SubjectItemPage', () => {
  let component: SubjectItemPage;
  let fixture: ComponentFixture<SubjectItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
