import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterofficerComponent } from './registerofficer.component';

describe('RegisterofficerComponent', () => {
  let component: RegisterofficerComponent;
  let fixture: ComponentFixture<RegisterofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterofficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
