import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentDComponent } from './demo-component-d.component';

describe('DemoComponentDComponent', () => {
  let component: DemoComponentDComponent;
  let fixture: ComponentFixture<DemoComponentDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponentDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
