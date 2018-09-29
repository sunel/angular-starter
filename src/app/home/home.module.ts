import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';
import { environment } from '@env/environment';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FEATURE_NAME, reducers } from './home.state';

import { StockMarketEffects } from './async/stock-market.effects';
import { StockMarketService } from './async/stock-market.service';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AsyncComponent } from './async/components/async.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([
      StockMarketEffects
    ])
  ],
  declarations: [HomeComponent, AsyncComponent],
  providers: [StockMarketService]
})

export class HomeModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/home/`,
    '.json'
  );
}