import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentCComponent } from './demo-component-c.component';

describe('DemoComponentCComponent', () => {
  let component: DemoComponentCComponent;
  let fixture: ComponentFixture<DemoComponentCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponentCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
