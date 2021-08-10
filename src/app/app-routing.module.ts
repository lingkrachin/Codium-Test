import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavBarComponent} from "./feature/nav-bar/nav-bar.component";
import {FizzBuzzComponent} from "./feature/fizz-buzz/fizz-buzz.component";
import {CommonModule} from "@angular/common";
import {LeapYearComponent} from "./feature/leap-year/leap-year.component";
import {StarPatternLeftComponent} from "./feature/star-pattern-left/star-pattern-left.component";
import {StarPatternRightComponent} from "./feature/star-pattern-right/star-pattern-right.component";
import {VPatternSidedownComponent} from "./feature/v-pattern-sidedown/v-pattern-sidedown.component";
import {XCrossPatternComponent} from "./feature/x-cross-pattern/x-cross-pattern.component";
import {AlphabetPatternComponent} from "./feature/alphabet-pattern/alphabet-pattern.component";
import {PrimeNumberComponent} from "./feature/prime-number/prime-number.component";
import {DiamondPatternComponent} from "./feature/diamond-pattern/diamond-pattern.component";

const routes: Routes = [
  {path: 'nav-bar', component: NavBarComponent},
  {path: 'fizz-buzz', component: FizzBuzzComponent},
  {path: 'leap-year', component: LeapYearComponent},
  {path: 'star-pattern-left', component: StarPatternLeftComponent},
  {path: 'star-pattern-right', component: StarPatternRightComponent},
  {path: 'v-side-down', component: VPatternSidedownComponent},
  {path: 'x-cross-pattern', component: XCrossPatternComponent},
  {path: 'alphabet-pattern', component: AlphabetPatternComponent},
  {path: 'prime-number', component: PrimeNumberComponent},
  {path: 'diamond-pattern', component: DiamondPatternComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
