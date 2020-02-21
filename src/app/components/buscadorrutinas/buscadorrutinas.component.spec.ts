import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorrutinasComponent } from './buscadorrutinas.component';

describe('BuscadorrutinasComponent', () => {
  let component: BuscadorrutinasComponent;
  let fixture: ComponentFixture<BuscadorrutinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorrutinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorrutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
