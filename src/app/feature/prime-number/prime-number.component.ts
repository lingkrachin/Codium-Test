import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.scss']
})
export class PrimeNumberComponent implements OnInit {
  prime = 0;
  testResult: any = [];
  isShowResult = false;
  exampleResult = 0;
  divide = 2;
  resultTotal: any = [];
  checker = false;
  checkSecond = false

  constructor() {
  }

  ngOnInit(): void {
    this.findPrimeNumber(this.exampleResult = 20)
  }

  findPrimeNumber(prime: any) {
    {
      this.resultTotal = [];
      this.exampleResult = prime //5

      this.isShowResult = true;
        for (let round = 2; round <= prime; round++) {
          this.resultTotal.push(round)
          this.checker = true;
          for (let divisor = 2; divisor < round; divisor++) {
            if (round % divisor === 0) {
              // i/j  2/2 = 0  2/3 = false  2/4 = 0  2/5 =  false        yes
              // i/j  3/2 = 1 false  3/3 = 0  3/4 = 1 false  3/5 = 1 false     yes
              // 4/2 = 0  4/3 = 1 false  4/4 = 0
              // 5/2 = 1  5/3 = 1 false  5/5 = 0     yes
              // 6/2 = 0  6/3 = 1 false  6/4 = 0  6/5 = 0  6/6 = 0

             this.checker = false;
              console.log('round', round,'%', 'divisor', divisor, '=', '0', round %  divisor === 0 , this.checker)
            }
          }
          if (!this.checker){
            this.resultTotal.pop(round);
            // console.log(round, this.checker)
          }
        }
    }
  }


  clear(){
    this.testResult = []
    this.isShowResult = false
  }

  // findPrimeNumber(prime: any) {
  //   {
  //     this.resultTotal = [];
  //     this.exampleResult = prime // example 5
  //
  //     this.isShowResult = true;
  //     for (let round = 2; round <= +prime; round++) {
  //         let divisor = 2
  //       this.testResult.push(round)
  //       this.checker = true;
  //       this.testResult.forEach((res: number) => { //try to use forEach
  //         res % divisor !== 0 ? this.checker = false : this.checker = true
  //         // console.log(this.testResult)
  //       })
  //         divisor++
  //
  //       if (this.checker) {
  //         (this.testResult.pop(round))
  //         // console.log('2',round);
  //       }
  //     // console.log(this.testResult) //result is odd number
  //     }
  //   }
  // }
}

