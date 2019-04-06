import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  image: string;
  quantity: number = 1;
  gallery: Array<string> = [];
  product: any = {};
  totalPrice: number = 0;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {

    }
  }

  changeImage(img: string) {
    this.image = img;
  }

  changePrice() {
    if (this.quantity < 0) {
      this.quantity = 0;
    }
    this.totalPrice = this.product.price * this.quantity;
  }

  goToPayment() {

  }


}
