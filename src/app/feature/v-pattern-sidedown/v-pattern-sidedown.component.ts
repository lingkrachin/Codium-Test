import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-v-pattern-sidedown',
  templateUrl: './v-pattern-sidedown.component.html',
  styleUrls: ['./v-pattern-sidedown.component.scss']
})
export class VPatternSidedownComponent implements OnInit {

  resultTotal: any = [];
  frontSpace = 0;
  middleSpace: any;
  countMiddleSpace = 0;
  lineCount = 0;
  isShowResult = false;

  constructor() {
  }

  ngOnInit(): void {
    this.starPatternLoop(5);
  }

  starPatternLoop(event: any) {
    this.isShowResult = true;
    this.resultTotal = [];
    this.frontSpace = event - 1;
    this.countMiddleSpace = 0;
    for (let row = 1; row <= event; row++) {
      if (this.frontSpace < event - 1) {
        this.middleSpace = '\xA0\xA0'.repeat((row - 1) + (this.countMiddleSpace - 1))
        this.resultTotal.push('\xA0\xA0'.repeat(this.frontSpace) + '*' + (this.middleSpace) + '*');
      } else {
        this.resultTotal.push('\xA0\xA0'.repeat(this.frontSpace) + '*');
      }
      this.frontSpace--;
      this.countMiddleSpace++;
    }
  }

  clear() {
    this.resultTotal = [];
    this.isShowResult = false;
  }

}
