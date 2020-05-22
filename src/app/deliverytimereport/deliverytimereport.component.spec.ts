import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverytimereportComponent } from './deliverytimereport.component';

describe('DeliverytimereportComponent', () => {
  let component: DeliverytimereportComponent;
  let fixture: ComponentFixture<DeliverytimereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverytimereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverytimereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
