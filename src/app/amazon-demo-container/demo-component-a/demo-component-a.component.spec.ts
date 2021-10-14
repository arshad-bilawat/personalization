import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentAComponent } from './demo-component-a.component';

describe('DemoComponentAComponent', () => {
  let component: DemoComponentAComponent;
  let fixture: ComponentFixture<DemoComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
