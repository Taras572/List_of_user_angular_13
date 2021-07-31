import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons13Component } from './lessons13.component';

describe('Lessons13Component', () => {
  let component: Lessons13Component;
  let fixture: ComponentFixture<Lessons13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lessons13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lessons13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
