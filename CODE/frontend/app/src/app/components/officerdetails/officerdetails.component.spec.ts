import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerdetailsComponent } from './officerdetails.component';

describe('OfficerdetailsComponent', () => {
  let component: OfficerdetailsComponent;
  let fixture: ComponentFixture<OfficerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
