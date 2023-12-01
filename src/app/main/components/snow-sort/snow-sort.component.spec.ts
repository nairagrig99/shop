import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowSortComponent } from './snow-sort.component';

describe('SnowSortComponent', () => {
  let component: SnowSortComponent;
  let fixture: ComponentFixture<SnowSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnowSortComponent]
    });
    fixture = TestBed.createComponent(SnowSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
