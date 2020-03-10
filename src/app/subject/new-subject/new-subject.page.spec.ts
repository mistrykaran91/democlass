import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewSubjectPage } from './new-subject.page';

describe('NewSubjectPage', () => {
  let component: NewSubjectPage;
  let fixture: ComponentFixture<NewSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
