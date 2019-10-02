import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmactividadesComponent } from './abmactividades.component';

describe('AbmactividadesComponent', () => {
  let component: AbmactividadesComponent;
  let fixture: ComponentFixture<AbmactividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmactividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmactividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
