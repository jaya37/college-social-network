import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofstudentsComponent } from './listofstudents.component';

describe('ListofstudentsComponent', () => {
  let component: ListofstudentsComponent;
  let fixture: ComponentFixture<ListofstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
