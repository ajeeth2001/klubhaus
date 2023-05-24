import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spin2winComponent } from './spin2win.component';

describe('Spin2winComponent', () => {
  let component: Spin2winComponent;
  let fixture: ComponentFixture<Spin2winComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Spin2winComponent]
    });
    fixture = TestBed.createComponent(Spin2winComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
