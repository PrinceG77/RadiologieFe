import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePrescriptionListComponent } from './historique-prescription-list.component';

describe('HistoriquePrescriptionListComponent', () => {
  let component: HistoriquePrescriptionListComponent;
  let fixture: ComponentFixture<HistoriquePrescriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriquePrescriptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriquePrescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
