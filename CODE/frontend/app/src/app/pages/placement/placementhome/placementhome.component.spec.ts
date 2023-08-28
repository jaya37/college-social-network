import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementhomeComponent } from './placementhome.component';

describe('PlacementhomeComponent', () => {
  let component: PlacementhomeComponent;
  let fixture: ComponentFixture<PlacementhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
