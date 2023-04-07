import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  mobiles=[
    {
      brand:"Samsung",
      price:20000,
      stock:100
    },
    {
      brand:"Experia",
      price:60000,
      stock:1000
    },
    {
      brand:"Xaomi",
      price:30000,
      stock:78
    },
    {
      brand:"Redmi",
      price:26000,
      stock:200
    },
    {
      brand:"Nokia",
      price:4000,
      stock:1000
    }

  ];

}
