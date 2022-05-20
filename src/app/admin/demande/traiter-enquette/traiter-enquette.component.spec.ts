import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterEnquetteComponent } from './traiter-enquette.component';

describe('TraiterEnquetteComponent', () => {
  let component: TraiterEnquetteComponent;
  let fixture: ComponentFixture<TraiterEnquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraiterEnquetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterEnquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
