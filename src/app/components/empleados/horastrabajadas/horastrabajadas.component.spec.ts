import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorastrabajadasComponent } from './horastrabajadas.component';

describe('HorastrabajadasComponent', () => {
  let component: HorastrabajadasComponent;
  let fixture: ComponentFixture<HorastrabajadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorastrabajadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorastrabajadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
