// import { createReducer, on } from '@ngrx/store';
// import { CounterState } from './counter.state';
//
// import * as CountActions from './counter.action';
//
// export const counterReducer = createReducer(
//   <CounterState>{
//     count: 0,
//   },
//   on(CountActions.increase, (state) => {
//     return {
//       count: state.count + 1,
//     };
//   }),
//   on(CountActions.decrease, (state) => {
//     if (state.count == 0) {
//       return state;
//     }
//     return {
//       count: state.count - 1,
//     };
//   }),
//   on(CountActions.reset, (state) => {
//     return {
//       count: 0,
//     };
//   }),
//   on(CountActions.input, (state, value) => {
//     if (state.count + value.num < 0) {
//       return state;
//     }
//     return {
//       count: state.count + value.num,
//     };
//   }),
// );

import { createReducer, on } from '@ngrx/store';
import * as CalculatorActions from './counter.action';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = { count: 0 };

export const counterReducer = createReducer(
  initialState,
  on(CalculatorActions.add, (state, { num }) => ({ count: state.count + num })),
  on(CalculatorActions.subtract, (state, { num }) => ({
    count: state.count - num,
  })),
  on(CalculatorActions.multiply, (state, { num }) => ({
    count: state.count * num,
  })),
  on(CalculatorActions.divide, (state, { num }) => ({
    count: num === 0 ? state.count : state.count / num,
  })),
  on(CalculatorActions.reset, () => initialState),
);
