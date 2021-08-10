import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetPatternComponent } from './alphabet-pattern.component';

describe('AlphabetPatternComponent', () => {
  let component: AlphabetPatternComponent;
  let fixture: ComponentFixture<AlphabetPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
