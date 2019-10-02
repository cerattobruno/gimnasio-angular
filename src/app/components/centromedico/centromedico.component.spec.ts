import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentromedicoComponent } from './centromedico.component';

describe('CentromedicoComponent', () => {
  let component: CentromedicoComponent;
  let fixture: ComponentFixture<CentromedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentromedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentromedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
