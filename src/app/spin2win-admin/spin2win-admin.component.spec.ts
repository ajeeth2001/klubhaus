import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spin2winAdminComponent } from './spin2win-admin.component';

describe('Spin2winAdminComponent', () => {
  let component: Spin2winAdminComponent;
  let fixture: ComponentFixture<Spin2winAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Spin2winAdminComponent]
    });
    fixture = TestBed.createComponent(Spin2winAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
