import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesComponent } from './values.component';

describe('ValuesComponent', () => {
  let component: ValuesComponent;
  let fixture: ComponentFixture<ValuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValuesComponent]
    });
    fixture = TestBed.createComponent(ValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
