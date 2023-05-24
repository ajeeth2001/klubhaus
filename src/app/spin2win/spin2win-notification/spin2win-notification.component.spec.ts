import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spin2winNotificationComponent } from './spin2win-notification.component';

describe('Spin2winNotificationComponent', () => {
  let component: Spin2winNotificationComponent;
  let fixture: ComponentFixture<Spin2winNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Spin2winNotificationComponent]
    });
    fixture = TestBed.createComponent(Spin2winNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
