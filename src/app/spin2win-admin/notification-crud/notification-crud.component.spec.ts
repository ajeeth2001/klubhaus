import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCrudComponent } from './notification-crud.component';

describe('NotificationCrudComponent', () => {
  let component: NotificationCrudComponent;
  let fixture: ComponentFixture<NotificationCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationCrudComponent]
    });
    fixture = TestBed.createComponent(NotificationCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
