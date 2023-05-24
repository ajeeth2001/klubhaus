import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsCrudComponent } from './rewards-crud.component';

describe('RewardsCrudComponent', () => {
  let component: RewardsCrudComponent;
  let fixture: ComponentFixture<RewardsCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardsCrudComponent]
    });
    fixture = TestBed.createComponent(RewardsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
