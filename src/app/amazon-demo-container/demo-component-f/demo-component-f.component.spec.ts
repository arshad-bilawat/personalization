import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentFComponent } from './demo-component-f.component';

describe('DemoComponentFComponent', () => {
  let component: DemoComponentFComponent;
  let fixture: ComponentFixture<DemoComponentFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponentFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
