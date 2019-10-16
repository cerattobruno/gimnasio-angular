import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarempleadoComponent } from './modificarempleado.component';

describe('ModificarempleadoComponent', () => {
  let component: ModificarempleadoComponent;
  let fixture: ComponentFixture<ModificarempleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarempleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
