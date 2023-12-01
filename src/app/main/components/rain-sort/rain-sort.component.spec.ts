import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainSortComponent } from './rain-sort.component';

describe('RainSortComponent', () => {
  let component: RainSortComponent;
  let fixture: ComponentFixture<RainSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RainSortComponent]
    });
    fixture = TestBed.createComponent(RainSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
