import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarPatternRightComponent } from './star-pattern-right.component';

describe('StarPatternRightComponent', () => {
  let component: StarPatternRightComponent;
  let fixture: ComponentFixture<StarPatternRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarPatternRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarPatternRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
