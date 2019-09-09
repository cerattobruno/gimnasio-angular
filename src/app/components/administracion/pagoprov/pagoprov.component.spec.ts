import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoprovComponent } from './pagoprov.component';

describe('PagoprovComponent', () => {
  let component: PagoprovComponent;
  let fixture: ComponentFixture<PagoprovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoprovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
