import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartComponent } from './product-cart.component.ts';

describe('ProductBasketComponent', () => {
  let component: ProductCartComponent;
  let fixture: ComponentFixture<ProductCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCartComponent]
    });
    fixture = TestBed.createComponent(ProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
