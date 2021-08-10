import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarPatternLeftComponent } from './star-pattern-left.component';

describe('StarPatternLeftComponent', () => {
  let component: StarPatternLeftComponent;
  let fixture: ComponentFixture<StarPatternLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarPatternLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarPatternLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
