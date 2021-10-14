import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentGComponent } from './demo-component-g.component';

describe('DemoComponentGComponent', () => {
  let component: DemoComponentGComponent;
  let fixture: ComponentFixture<DemoComponentGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponentGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
