import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentEComponent } from './demo-component-e.component';

describe('DemoComponentEComponent', () => {
  let component: DemoComponentEComponent;
  let fixture: ComponentFixture<DemoComponentEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponentEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
