import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
      <h3> Contador: {{ counter }}</h3>

      <button (click)="increaseBy(1)">+1</button>
      <button (click)="resete()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>


<hr>
  `,
})

export class CounterComponent {

  counter = 0;
  increaseBy ( value: number): void{

    this.counter += value;
  }

  resete ():void{
    this.counter  = 0;
  }
}














// import { Component } from "@angular/core";

// @Component({
//   selector: 'app-counter',
//   template: '<h1> Holis Puñetas </h1>'
// })

// export class CounterComponent{

// }
