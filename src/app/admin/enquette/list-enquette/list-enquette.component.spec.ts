import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnquetteComponent } from './list-enquette.component';

describe('ListEnquetteComponent', () => {
  let component: ListEnquetteComponent;
  let fixture: ComponentFixture<ListEnquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnquetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
