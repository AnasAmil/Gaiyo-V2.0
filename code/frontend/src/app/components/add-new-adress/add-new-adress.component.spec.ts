import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAdressComponent } from './add-new-adress.component';

describe('AddNewAdressComponent', () => {
  let component: AddNewAdressComponent;
  let fixture: ComponentFixture<AddNewAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewAdressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
