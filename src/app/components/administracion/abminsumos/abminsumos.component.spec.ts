import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbminsumosComponent } from './abminsumos.component';

describe('AbminsumosComponent', () => {
  let component: AbminsumosComponent;
  let fixture: ComponentFixture<AbminsumosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbminsumosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbminsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
