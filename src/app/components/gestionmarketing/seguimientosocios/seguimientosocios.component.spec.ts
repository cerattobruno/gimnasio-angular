import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosociosComponent } from './seguimientosocios.component';

describe('SeguimientosociosComponent', () => {
  let component: SeguimientosociosComponent;
  let fixture: ComponentFixture<SeguimientosociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientosociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientosociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
