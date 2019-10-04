import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoscuentasComponent } from './graficoscuentas.component';

describe('GraficoscuentasComponent', () => {
  let component: GraficoscuentasComponent;
  let fixture: ComponentFixture<GraficoscuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoscuentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoscuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
