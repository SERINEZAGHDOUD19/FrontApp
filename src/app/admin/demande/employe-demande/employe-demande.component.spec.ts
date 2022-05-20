import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDemandeComponent } from './employe-demande.component';

describe('EmployeDemandeComponent', () => {
  let component: EmployeDemandeComponent;
  let fixture: ComponentFixture<EmployeDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
