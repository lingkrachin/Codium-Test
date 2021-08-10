import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPatternSidedownComponent } from './v-pattern-sidedown.component';

describe('VPatternSidedownComponent', () => {
  let component: VPatternSidedownComponent;
  let fixture: ComponentFixture<VPatternSidedownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VPatternSidedownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VPatternSidedownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
