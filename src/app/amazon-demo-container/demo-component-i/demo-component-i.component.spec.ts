import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentIComponent } from './demo-component-i.component';

describe('DemoComponentIComponent', () => {
  let component: DemoComponentIComponent;
  let fixture: ComponentFixture<DemoComponentIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponentIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
