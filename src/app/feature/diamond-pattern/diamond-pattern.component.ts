import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diamond-pattern',
  templateUrl: './diamond-pattern.component.html',
  styleUrls: ['./diamond-pattern.component.scss']
})
export class DiamondPatternComponent implements OnInit {

  resultTotal: any;
  frontSpace = 0;
  middleSpace: any;
  countMiddleSpace = 0;
  upsideResult: any;
  lineCount = 0;
  isShowResult = false;
  countTextDown = 0;
  countTextUp = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.starPatternLoop(9);
  }

  starPatternLoop(input: any) {
    this.isShowResult = true;

    this.resultTotal = [];
    this.countTextUp = 1;
    this.frontSpace = 0;
    this.countTextDown= 0;
    for (let rows = 1; rows <= input; rows++) {
      if (this.countTextUp >= input) {
        this.frontSpace = (this.countTextUp - input);
        this.countTextDown = this.countTextUp - (this.frontSpace * 2);
        this.countTextDown > 0 ? this.resultTotal.push('\xA0'.repeat(this.frontSpace) + '*'.repeat(this.countTextDown)) : ''
        this.countTextUp += 2;
      } else {
        this.frontSpace = (input - this.countTextUp);
        this.resultTotal.push('\xA0'.repeat(this.frontSpace) + '*'.repeat(this.countTextUp));
        this.countTextUp += 2;
        console.log('countText', this.countTextUp, 'space', this.frontSpace, 'rows', rows)
      }
    }
  }

  clear() {
    this.resultTotal = [];
    this.isShowResult = false;
  }
}
