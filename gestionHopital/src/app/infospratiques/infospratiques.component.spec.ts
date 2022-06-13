import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfospratiquesComponent } from './infospratiques.component';

describe('InfospratiquesComponent', () => {
  let component: InfospratiquesComponent;
  let fixture: ComponentFixture<InfospratiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfospratiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfospratiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
