import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdctDetailsComponent } from './prdct-details.component';

describe('PrdctDetailsComponent', () => {
  let component: PrdctDetailsComponent;
  let fixture: ComponentFixture<PrdctDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdctDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdctDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
