import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-pattern-right',
  templateUrl: './star-pattern-right.component.html',
  styleUrls: ['./star-pattern-right.component.scss']
})
export class StarPatternRightComponent implements OnInit {

  resultTotal:any = [];
  totalResult = '';
  frontSpace = 0;
  isShowResult = false;
  constructor() { }

  ngOnInit(): void {
    this.starPatternLoop(5);
  }

  starPatternLoop(input: any){
    this.isShowResult = true;
  this.resultTotal = [];
  this.totalResult = '';
  this.frontSpace = input - 1;
  for (let row = 1 ; row <= input ; row++ ){
      this.totalResult +=  '*';
      this.resultTotal.push('\xA0\xA0'.repeat(this.frontSpace) + this.totalResult + '\n');
      this.frontSpace --;
      }
  }
  clear(){
    this.resultTotal = [];
    this.isShowResult = false;
  }

}
