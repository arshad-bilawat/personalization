import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentJComponent } from './demo-component-j.component';

describe('DemoComponentJComponent', () => {
  let component: DemoComponentJComponent;
  let fixture: ComponentFixture<DemoComponentJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponentJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
