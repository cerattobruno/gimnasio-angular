import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoproveedoresComponent } from './listadoproveedores.component';

describe('ListadoproveedoresComponent', () => {
  let component: ListadoproveedoresComponent;
  let fixture: ComponentFixture<ListadoproveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoproveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
