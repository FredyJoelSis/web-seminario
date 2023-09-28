import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVisitasComponent } from './s-visitas.component';

describe('SVisitasComponent', () => {
  let component: SVisitasComponent;
  let fixture: ComponentFixture<SVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SVisitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
