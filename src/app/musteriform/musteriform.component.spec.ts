import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriformComponent } from './musteriform.component';

describe('MusteriformComponent', () => {
  let component: MusteriformComponent;
  let fixture: ComponentFixture<MusteriformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusteriformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusteriformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
