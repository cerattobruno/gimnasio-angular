import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarprovComponent } from './modificarprov.component';

describe('ModificarprovComponent', () => {
  let component: ModificarprovComponent;
  let fixture: ComponentFixture<ModificarprovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarprovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
