import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { selectStockMarket } from '../stock-market.selectors';
import { ActionStockMarketRetrieve } from '../stock-market.actions';
import { State } from '../../home.state'

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {

  initialized;
  stocks;

  constructor(public store: Store<State>) {}

  ngOnInit() {
    this.initialized = false;
    this.store
      .pipe(select(selectStockMarket))
      .subscribe((stocks: any) => {
        this.stocks = stocks;

        if (!this.initialized) {
          this.initialized = true;
          this.store.dispatch(
            new ActionStockMarketRetrieve({ symbol: stocks.symbol })
          );
        }
      });
  }

  onSymbolChange(symbol: string) {
    this.store.dispatch(new ActionStockMarketRetrieve({ symbol }));
  }

}
