import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMantenimientosComponent } from './crud-mantenimientos.component';

describe('CrudMantenimientosComponent', () => {
  let component: CrudMantenimientosComponent;
  let fixture: ComponentFixture<CrudMantenimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMantenimientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudMantenimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
