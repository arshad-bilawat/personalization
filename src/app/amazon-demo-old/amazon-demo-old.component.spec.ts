import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonDemoOldComponent } from './amazon-demo-old.component';

describe('AmazonDemoOldComponent', () => {
  let component: AmazonDemoOldComponent;
  let fixture: ComponentFixture<AmazonDemoOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonDemoOldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonDemoOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
