import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './feature/nav-bar/nav-bar.component';
import { FizzBuzzComponent } from './feature/fizz-buzz/fizz-buzz.component';
import {CommonModule} from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeapYearComponent } from './feature/leap-year/leap-year.component';
import { StarPatternLeftComponent } from './feature/star-pattern-left/star-pattern-left.component';
import { StarPatternRightComponent } from './feature/star-pattern-right/star-pattern-right.component';
import { VPatternSidedownComponent } from './feature/v-pattern-sidedown/v-pattern-sidedown.component';
import { XCrossPatternComponent } from './feature/x-cross-pattern/x-cross-pattern.component';
import { AlphabetPatternComponent } from './feature/alphabet-pattern/alphabet-pattern.component';
import { PrimeNumberComponent } from './feature/prime-number/prime-number.component';
import { RouterModule} from "@angular/router";
import { DiamondPatternComponent } from './feature/diamond-pattern/diamond-pattern.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FizzBuzzComponent,
    LeapYearComponent,
    StarPatternLeftComponent,
    StarPatternRightComponent,
    VPatternSidedownComponent,
    XCrossPatternComponent,
    AlphabetPatternComponent,
    PrimeNumberComponent,
    DiamondPatternComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
