import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  public logoName: string = "Your Logo Name";
  public logoClass: string = 'Pacifico';
  constructor() { }

  ngOnInit() {
  }

}
