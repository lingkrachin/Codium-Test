import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-x-cross-pattern',
  templateUrl: './x-cross-pattern.component.html',
  styleUrls: ['./x-cross-pattern.component.scss']
})
export class XCrossPatternComponent implements OnInit {

  result = ''
  totalResult: any = []
  colSpot = 0;
  middleSpace: any;
  countMiddleSpace = 0;
  testResult: any;
  upsideResult: any;
  count = ''
  resultCool: any;
  layer = ''
  lineCount = 0;
  isShowResult = false

  constructor() {
  }

  ngOnInit(): void {
    this.starPatternLoop(5);
  }

  starPatternLoop(event: any) {
    this.isShowResult = true
    this.result = '';
    this.colSpot = +event + 1;
    for (let row = 1; row <= event; row++) {
      for (let col = 1; col <= event; col++) {
        row === col || row + col == this.colSpot ? this.result += '*' : this.result += '\xA0\xA0';
      }
    this.result += '\n'
    }
  }

  clear() {
    this.result = ''
    this.isShowResult = false
  }
}
