import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedapacienteComponent } from './busquedapaciente.component';

describe('BusquedapacienteComponent', () => {
  let component: BusquedapacienteComponent;
  let fixture: ComponentFixture<BusquedapacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedapacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedapacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
