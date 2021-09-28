import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonDemoComponent } from './amazon-demo.component';

describe('AmazonDemoComponent', () => {
  let component: AmazonDemoComponent;
  let fixture: ComponentFixture<AmazonDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
