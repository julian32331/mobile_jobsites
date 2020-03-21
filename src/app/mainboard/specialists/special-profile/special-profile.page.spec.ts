import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecialProfilePage } from './special-profile.page';

describe('SpecialProfilePage', () => {
  let component: SpecialProfilePage;
  let fixture: ComponentFixture<SpecialProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
