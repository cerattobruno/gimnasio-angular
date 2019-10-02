import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotencialesclientesComponent } from './potencialesclientes.component';

describe('PotencialesclientesComponent', () => {
  let component: PotencialesclientesComponent;
  let fixture: ComponentFixture<PotencialesclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotencialesclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotencialesclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
