import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPantryNG';
  clicks = 0;
  newClick(amount: number){
    this.clicks += amount
  }
}
