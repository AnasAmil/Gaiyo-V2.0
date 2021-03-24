import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstafeatureComponent } from './instafeature.component';

describe('InstafeatureComponent', () => {
  let component: InstafeatureComponent;
  let fixture: ComponentFixture<InstafeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstafeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstafeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
