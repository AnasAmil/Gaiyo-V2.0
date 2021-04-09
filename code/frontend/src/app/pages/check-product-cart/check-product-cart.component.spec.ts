import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckProductCartComponent } from './check-product-cart.component';

describe('CheckProductCartComponent', () => {
  let component: CheckProductCartComponent;
  let fixture: ComponentFixture<CheckProductCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckProductCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
