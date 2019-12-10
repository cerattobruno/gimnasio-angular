import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosActividadComponent } from './socios-actividad.component';

describe('SociosActividadComponent', () => {
  let component: SociosActividadComponent;
  let fixture: ComponentFixture<SociosActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociosActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociosActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
