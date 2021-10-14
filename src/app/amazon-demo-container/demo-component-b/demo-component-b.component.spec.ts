import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentBComponent } from './demo-component-b.component';

describe('DemoComponentBComponent', () => {
  let component: DemoComponentBComponent;
  let fixture: ComponentFixture<DemoComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
