import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-alphabet-pattern',
  templateUrl: './alphabet-pattern.component.html',
  styleUrls: ['./alphabet-pattern.component.scss']
})
export class AlphabetPatternComponent implements OnInit {

  totalResult = '';
  isShowResult = false;

  constructor() {
  }

  ngOnInit(): void {
    this.starPatternLoop(5);
  }

  starPatternLoop(event: any) {
    this.totalResult = '';
    this.isShowResult = true;
    let interval = 1;
    for (let rowsUpside = 1; rowsUpside <= +event; rowsUpside++) {


      for (let leftText = 1; leftText <= (+event - rowsUpside); leftText++) {
        this.totalResult += 'A';
      }

      for (let middleUpside = 1; middleUpside <= (2 * rowsUpside - 1); middleUpside++) {
        interval !== middleUpside && middleUpside !== rowsUpside * 2 - 1
          ? this.totalResult += 'E' : this.totalResult += '+'
      }
      for (let rightText = rowsUpside + 1; rightText <= +event; rightText++) {
        this.totalResult += 'B';
      }

      this.totalResult += '\n'
    }

    for (let rowsSidedown = +event - 1; rowsSidedown >= 1; rowsSidedown--) {

      for (let leftText = 1; leftText <= (+event - rowsSidedown); leftText++) {
        this.totalResult += 'C'
      }

      for (let middleSidedown = 1; middleSidedown <= (2 * rowsSidedown - 1); middleSidedown++) {
        middleSidedown !== interval && middleSidedown !== rowsSidedown * 2 - 1
          ? this.totalResult += 'E' : this.totalResult += '+'
      }
      for (let rightText = rowsSidedown + 1; rightText <= +event; rightText++) {
        this.totalResult += 'D'
      }
      this.totalResult += '\n'

    }
  }

  clear() {
    this.totalResult = ''
    this.isShowResult = false;
  }


}
