// import { createAction, props } from '@ngrx/store';
//
// export const increase = createAction('[Counter] Increase');
// export const decrease = createAction('[Counter] Decrease');
// export const reset = createAction('[Counter] Reset');
// export const input = createAction('[Counter] Input', props<{ num: number }>());

import { createAction, props } from '@ngrx/store';

export const add = createAction('[Calculator] Add', props<{ num: number }>());
export const subtract = createAction(
  '[Calculator] Subtract',
  props<{ num: number }>(),
);
export const multiply = createAction(
  '[Calculator] Multiply',
  props<{ num: number }>(),
);
export const divide = createAction(
  '[Calculator] Divide',
  props<{ num: number }>(),
);
export const reset = createAction('[Calculator] Reset');
