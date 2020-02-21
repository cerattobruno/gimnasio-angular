import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpresionactsComponent } from './impresionacts.component';

describe('ImpresionactsComponent', () => {
  let component: ImpresionactsComponent;
  let fixture: ComponentFixture<ImpresionactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpresionactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpresionactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
