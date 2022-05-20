import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDemandeComponent } from './client-demande.component';

describe('ClientDemandeComponent', () => {
  let component: ClientDemandeComponent;
  let fixture: ComponentFixture<ClientDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
