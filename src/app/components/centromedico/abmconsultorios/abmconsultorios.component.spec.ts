import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmconsultoriosComponent } from './abmconsultorios.component';

describe('AbmconsultoriosComponent', () => {
  let component: AbmconsultoriosComponent;
  let fixture: ComponentFixture<AbmconsultoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmconsultoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmconsultoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
