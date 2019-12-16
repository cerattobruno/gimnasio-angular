import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajagymComponent } from './cajagym.component';

describe('CajagymComponent', () => {
  let component: CajagymComponent;
  let fixture: ComponentFixture<CajagymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajagymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajagymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
