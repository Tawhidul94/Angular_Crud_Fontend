import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLstComponent } from './employee-lst.component';

describe('EmployeeLstComponent', () => {
  let component: EmployeeLstComponent;
  let fixture: ComponentFixture<EmployeeLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
