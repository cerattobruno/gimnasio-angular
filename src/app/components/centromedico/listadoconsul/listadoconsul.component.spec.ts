import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoconsulComponent } from './listadoconsul.component';

describe('ListadoconsulComponent', () => {
  let component: ListadoconsulComponent;
  let fixture: ComponentFixture<ListadoconsulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoconsulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoconsulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
