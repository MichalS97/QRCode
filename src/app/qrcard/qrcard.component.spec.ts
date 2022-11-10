import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRCardComponent } from './qrcard.component';

describe('QRCardComponent', () => {
  let component: QRCardComponent;
  let fixture: ComponentFixture<QRCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QRCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
