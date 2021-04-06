import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDescriptionComponent } from './covid-description.component';

describe('CovidDescriptionComponent', () => {
  let component: CovidDescriptionComponent;
  let fixture: ComponentFixture<CovidDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
