import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionmarketingComponent } from './gestionmarketing.component';

describe('GestionmarketingComponent', () => {
  let component: GestionmarketingComponent;
  let fixture: ComponentFixture<GestionmarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionmarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
