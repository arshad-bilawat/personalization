import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentHComponent } from './demo-component-h.component';

describe('DemoComponentHComponent', () => {
  let component: DemoComponentHComponent;
  let fixture: ComponentFixture<DemoComponentHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponentHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
