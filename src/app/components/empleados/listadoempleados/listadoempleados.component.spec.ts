import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoempleadosComponent } from './listadoempleados.component';

describe('ListadoempleadosComponent', () => {
  let component: ListadoempleadosComponent;
  let fixture: ComponentFixture<ListadoempleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoempleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
