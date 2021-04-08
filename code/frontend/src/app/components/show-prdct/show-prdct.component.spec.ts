import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPrdctComponent } from './show-prdct.component';

describe('ShowPrdctComponent', () => {
  let component: ShowPrdctComponent;
  let fixture: ComponentFixture<ShowPrdctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPrdctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPrdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
