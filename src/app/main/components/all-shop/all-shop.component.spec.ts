import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShopComponent } from './all-shop.component';

describe('AllShopComponent', () => {
  let component: AllShopComponent;
  let fixture: ComponentFixture<AllShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllShopComponent]
    });
    fixture = TestBed.createComponent(AllShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
