// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { CounterState } from './ngrx/counter/counter.state';
// import { AsyncPipe } from '@angular/common';
// import * as CounterActions from './ngrx/counter/counter.action';
// import { interval, map, Observable } from 'rxjs';
// import { FormsModule } from '@angular/forms';
// import { reset } from './ngrx/counter/counter.action';
//
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, AsyncPipe, FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent {
//   title = 'ngrx-demo';
//
//   count$!: Observable<number>;
//
//   inputNum = 0;
//   currentTime$!: Observable<string>;
//
//   constructor(private store: Store<{ counter: CounterState }>) {
//     this.count$ = this.store.select('counter', 'count');
//   }
//
//   ngOnInit() {
//     this.currentTime$ = interval(1000).pipe(
//       map(() => new Date().toLocaleTimeString()),
//     );
//   }
//
//   public increase() {
//     this.store.dispatch(CounterActions.increase());
//   }
//
//   public decrease() {
//     this.store.dispatch(CounterActions.decrease());
//   }
//
//   changeValue() {
//     this.store.dispatch(CounterActions.input({ num: this.inputNum }));
//   }
//
//   reset() {
//     this.store.dispatch(reset());
//   }
// }

// public delay(ms: number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1);
//     }, ms);
//   });
// }
//
// async boilWater() {
//   console.log('Start boiling water');
//   await this.delay(5000);
//   console.log('Water is boiled');
// }
//
// async makeCoffee() {
//   console.log('Start making coffee');
//   await this.delay(5000);
//   console.log('Coffee is ready');
// }
//
// async brewCoffee() {
//   console.log('Start brewing coffee');
//   await this.delay(3000);
//   console.log('Coffee is brewed');
// }
//
// async pourCoffee() {
//   console.log('Start pouring coffee');
//   await this.delay(2000);
//   console.log('Coffee is poured');
// }
//
// async drinkCoffee() {
//   console.time('Coffee is drunk');
//   await Promise.all([this.boilWater(), this.makeCoffee()]);
//   await this.brewCoffee();
//   await this.pourCoffee();
//   console.timeEnd('Coffee is drunk');
// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CalculatorActions from './ngrx/counter/counter.action';
import { CounterState } from './ngrx/counter/counter.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class AppComponent {
  display: string = '';
  currentNumber: string = '';
  operator: string | null = null;
  previousNumber: string = '';

  constructor(private store: Store<{ counter: CounterState }>) {}

  appendNumber(number: string) {
    this.currentNumber += number;
    this.updateDisplay();
  }

  setOperator(operator: string) {
    if (this.currentNumber === '') return;
    if (this.previousNumber !== '') {
      this.calculate();
    }
    this.operator = operator;
    this.previousNumber = this.currentNumber;
    this.currentNumber = '';
  }

  calculate() {
    if (
      this.currentNumber === '' ||
      this.previousNumber === '' ||
      this.operator === null
    )
      return;
    const a = parseFloat(this.previousNumber);
    const b = parseFloat(this.currentNumber);
    let result: number;

    switch (this.operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        return;
    }

    this.currentNumber = result.toString();
    this.previousNumber = '';
    this.operator = null;
    this.updateDisplay();
  }

  clear() {
    this.display = '';
    this.currentNumber = '';
    this.previousNumber = '';
    this.operator = null;
  }

  private updateDisplay() {
    this.display = this.currentNumber;
  }
}
