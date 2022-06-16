import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRDVComponent } from './type-rdv.component';

describe('TypeRDVComponent', () => {
  let component: TypeRDVComponent;
  let fixture: ComponentFixture<TypeRDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRDVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
