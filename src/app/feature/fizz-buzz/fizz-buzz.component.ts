import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.scss']
})
export class FizzBuzzComponent implements OnInit {
  resultTotal:any = [];
  isShowResult = false;

  constructor() { }

  ngOnInit(): void {
    this.fizzBuzz(100);
  }

  fizzBuzz(value: any){
    this.resultTotal = [];
    this.isShowResult = true;
    for (let total = 1; total <= +value; total++){

      if (total % 3 === 0 && total % 5 === 0) {
        this.resultTotal.push('Fizz-Buzz')
      }
      else if (total % 5 === 0) {
        this.resultTotal.push('Buzz')
      }
      else if (total % 3 === 0) {
        this.resultTotal.push('Fizz')
      } else {
        this.resultTotal.push(total)
      }
    }
  }

  clear(){
    this.resultTotal = [];
    this.isShowResult = false;
  }

}
