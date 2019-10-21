import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaractividadComponent } from './editaractividad.component';

describe('EditaractividadComponent', () => {
  let component: EditaractividadComponent;
  let fixture: ComponentFixture<EditaractividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaractividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaractividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
