import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {NavComponent} from './nav/nav.component';
import {MasterPageComponent} from './master-page.component';
import {RouterModule} from '@angular/router';
import {MainRoutes} from './main-routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CountrySelectorComponent} from './country-selector/country-selector.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer[] = [debug]

@NgModule({
  declarations: [MasterPageComponent, HomeComponent, NavComponent, CountrySelectorComponent],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({},{metaReducers}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
