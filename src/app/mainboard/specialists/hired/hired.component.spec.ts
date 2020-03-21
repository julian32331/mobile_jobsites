import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HiredComponent } from './hired.component';

describe('HiredComponent', () => {
  let component: HiredComponent;
  let fixture: ComponentFixture<HiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiredComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
