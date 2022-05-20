import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDemandeConnectedComponent } from './ajout-demande-connected.component';

describe('AjoutDemandeConnectedComponent', () => {
  let component: AjoutDemandeConnectedComponent;
  let fixture: ComponentFixture<AjoutDemandeConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDemandeConnectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDemandeConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
