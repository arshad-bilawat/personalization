import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonDemoContainerComponent } from './amazon-demo-container.component';

describe('AmazonDemoContainerComponent', () => {
  let component: AmazonDemoContainerComponent;
  let fixture: ComponentFixture<AmazonDemoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonDemoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonDemoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
