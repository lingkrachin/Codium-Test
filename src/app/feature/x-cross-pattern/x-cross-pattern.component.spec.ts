import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XCrossPatternComponent } from './x-cross-pattern.component';

describe('XCrossPatternComponent', () => {
  let component: XCrossPatternComponent;
  let fixture: ComponentFixture<XCrossPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XCrossPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XCrossPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
