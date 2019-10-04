import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosociosComponent } from './listadosocios.component';

describe('ListadosociosComponent', () => {
  let component: ListadosociosComponent;
  let fixture: ComponentFixture<ListadosociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadosociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadosociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
