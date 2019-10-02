import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmprofesionalesComponent } from './abmprofesionales.component';

describe('AbmprofesionalesComponent', () => {
  let component: AbmprofesionalesComponent;
  let fixture: ComponentFixture<AbmprofesionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmprofesionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmprofesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
