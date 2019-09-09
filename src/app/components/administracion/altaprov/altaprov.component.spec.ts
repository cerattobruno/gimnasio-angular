import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaprovComponent } from './altaprov.component';

describe('AltaprovComponent', () => {
  let component: AltaprovComponent;
  let fixture: ComponentFixture<AltaprovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaprovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
