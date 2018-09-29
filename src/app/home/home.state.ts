import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import { stockMarketReducer } from './async/stock-market.reducer';
import { StockMarketState } from './async/stock-market.model';

import { AppState } from '@app/core';

export const FEATURE_NAME = 'home';

export const reducers: ActionReducerMap<HomeState> = {
  stocks: stockMarketReducer
};

export const selectExamples = createFeatureSelector<State, HomeState>(
    FEATURE_NAME
);

export interface HomeState {
  stocks: StockMarketState;
}

export interface State extends AppState {
  home: HomeState;
}