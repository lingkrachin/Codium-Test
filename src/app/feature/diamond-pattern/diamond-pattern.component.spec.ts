import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondPatternComponent } from './diamond-pattern.component';

describe('DiamondPatternComponent', () => {
  let component: DiamondPatternComponent;
  let fixture: ComponentFixture<DiamondPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiamondPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
