import { Component } from '@angular/core';

@Component({
  // se convierte en comoonent con ese decorador
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(2)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy()">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter = this.counter + value;
    // this.counter += value;
  }

  decreaseBy(): void {
    this.counter--;
  }

  reset(): void {
    this.counter = 10;
  }
}
