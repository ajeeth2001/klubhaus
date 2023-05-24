import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spin2winAdvertisementComponent } from './spin2win-advertisement.component';

describe('Spin2winAdvertisementComponent', () => {
  let component: Spin2winAdvertisementComponent;
  let fixture: ComponentFixture<Spin2winAdvertisementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Spin2winAdvertisementComponent]
    });
    fixture = TestBed.createComponent(Spin2winAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
