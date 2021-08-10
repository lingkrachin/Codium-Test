import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  test = [1,2,3,4,5,6,7]
  logo = '../../assets/images/logo-codium.png';
  constructor() { }

  ngOnInit(): void {
  }

}
