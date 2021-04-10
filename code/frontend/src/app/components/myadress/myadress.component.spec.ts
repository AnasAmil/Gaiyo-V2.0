import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyadressComponent } from './myadress.component';

describe('MyadressComponent', () => {
  let component: MyadressComponent;
  let fixture: ComponentFixture<MyadressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyadressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyadressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
