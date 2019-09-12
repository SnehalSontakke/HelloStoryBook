import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomingMsgComponent } from './welcoming-msg.component';

describe('WelcomingMsgComponent', () => {
  let component: WelcomingMsgComponent;
  let fixture: ComponentFixture<WelcomingMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomingMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomingMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
