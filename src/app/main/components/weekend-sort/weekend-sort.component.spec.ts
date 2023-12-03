import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendSortComponent } from './weekend-sort.component';

describe('WeekendSortComponent', () => {
  let component: WeekendSortComponent;
  let fixture: ComponentFixture<WeekendSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekendSortComponent]
    });
    fixture = TestBed.createComponent(WeekendSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
