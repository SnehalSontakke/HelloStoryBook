import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeInternComponent } from './welcome-intern.component';

describe('WelcomeInternComponent', () => {
  let component: WelcomeInternComponent;
  let fixture: ComponentFixture<WelcomeInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
