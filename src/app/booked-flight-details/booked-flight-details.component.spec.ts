import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedFlightDetailsComponent } from './booked-flight-details.component';

describe('BookedFlightDetailsComponent', () => {
  let component: BookedFlightDetailsComponent;
  let fixture: ComponentFixture<BookedFlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedFlightDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
