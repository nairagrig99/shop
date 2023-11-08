import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBasketComponent } from './product-basket.component';

describe('ProductBasketComponent', () => {
  let component: ProductBasketComponent;
  let fixture: ComponentFixture<ProductBasketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBasketComponent]
    });
    fixture = TestBed.createComponent(ProductBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
