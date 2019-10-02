import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionestadisticasComponent } from './gestionestadisticas.component';

describe('GestionestadisticasComponent', () => {
  let component: GestionestadisticasComponent;
  let fixture: ComponentFixture<GestionestadisticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionestadisticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionestadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
