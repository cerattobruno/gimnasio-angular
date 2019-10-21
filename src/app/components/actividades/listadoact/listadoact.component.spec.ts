import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoactComponent } from './listadoact.component';

describe('ListadoactComponent', () => {
  let component: ListadoactComponent;
  let fixture: ComponentFixture<ListadoactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
