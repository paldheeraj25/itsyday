import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  public productLine: string = 'beauty'

  ngOnInit() {
  }

  serviceBox(productLine: string) {
    this.productLine = productLine;
  }
}
