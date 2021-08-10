import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-pattern-left',
  templateUrl: './star-pattern-left.component.html',
  styleUrls: ['./star-pattern-left.component.scss']
})
export class StarPatternLeftComponent implements OnInit {

  resultTotal:any = [];
  totalResult = '';
  isShowResult = false;
  constructor() { }

  ngOnInit(): void {
    this.starPatternLoop(5);
  }

  starPatternLoop(input: any){
    this.isShowResult = true;
    this.resultTotal = [];
    this.totalResult = '';
    for (let row = 1 ; row <= input ; row++ ){
      this.totalResult += '*'
      this.resultTotal.push(this.totalResult +'\n');
    }
  }
  clear(){
    this.resultTotal = [];
    this.isShowResult = false;
  }
}


