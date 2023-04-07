import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name="amitava"
  d=new Date(2023,4,7)
  b=new Date(2023,4,7,19,10,35)
  amt:number=7654356.675

}
