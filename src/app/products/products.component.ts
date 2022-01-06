import { Component, OnInit } from '@angular/core';
import { Product } from '../products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 800000,
        description: 'bla bla bla'
      },
      {
        id: '2',
        image: 'assets/images/hoodie.png',
        title: 'Hoodie',
        price: 800000,
        description: 'bla bla bla'
      },
      {
        id: '3',
        image: 'assets/images/mug.png',
        title: 'Mug',
        price: 800000,
        description: 'bla bla bla'
      },
      {
        id: '4',
        image: 'assets/images/pin.png',
        title: 'Pin',
        price: 800000,
        description: 'bla bla bla'
      },
      {
        id: '5',
        image: 'assets/images/stickers1.png',
        title: 'Stickers',
        price: 800000,
        description: 'bla bla bla'
      },
      {
        id: '6',
        image: 'assets/images/stickers2.png',
        title: 'Stickers',
        price: 800000,
        description: 'bla bla bla'
      },
      ];

  constructor() { }

  ngOnInit(): void {
  }
  ClickProduct(id: number)
  {
    console.log('Product');
    console.log(id);
  }

}
