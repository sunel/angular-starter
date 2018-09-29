import { createSelector } from '@ngrx/store';

import { HomeState, selectExamples } from '../home.state';

export const selectStockMarket = createSelector(
  selectExamples,
  (state: HomeState) => state.stocks
);