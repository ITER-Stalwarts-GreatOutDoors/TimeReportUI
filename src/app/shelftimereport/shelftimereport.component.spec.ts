import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelftimereportComponent } from './shelftimereport.component';

describe('ShelftimereportComponent', () => {
  let component: ShelftimereportComponent;
  let fixture: ComponentFixture<ShelftimereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelftimereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelftimereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
