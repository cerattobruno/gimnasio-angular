import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoprofesionalesComponent } from './listadoprofesionales.component';

describe('ListadoprofesionalesComponent', () => {
  let component: ListadoprofesionalesComponent;
  let fixture: ComponentFixture<ListadoprofesionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoprofesionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoprofesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
