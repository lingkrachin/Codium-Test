import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-leap-year',
  templateUrl: './leap-year.component.html',
  styleUrls: ['./leap-year.component.scss']
})
export class LeapYearComponent implements OnInit {

  leapYearResult = ''
  isShowResult = false;
  totalResult: any = [];

  constructor() {
  }

  ngOnInit(): void {
    this.leapYear(1800);
  }

  leapYear(year: any) {
    this.isShowResult = true;
    year % 400 == 0 || year % 400 != 0 && year % 100 != 0 && year % 4 == 0
      ? this.leapYearResult = 'YEAR ' + year + ' => IS TRUE'
      : this.leapYearResult = 'YEAR ' + year + ' => IS FALSE'
    this.totalResult.push(this.leapYearResult)
  }

  clear() {
    this.isShowResult = false;
    this.leapYearResult = ''
  }
}

