import {NgModule} from '@angular/core';
import {HomeComponent} from './master-page/home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {NavComponent} from './master-page/nav/nav.component';
import {MasterPageComponent} from './master-page/master-page.component';
import {RouterModule} from '@angular/router';
import {MainRoutes} from './main.routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CountrySelectorComponent} from './master-page/country-selector/country-selector.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from '../environments/environment';
import {metaReducers, reducers} from './store';
import {UserModule} from './user/user.module';
import {EntityDataModule} from '@ngrx/data';
import {entityConfig} from './data/entity-metadata';

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


// export const metaReducers: MetaReducer[] = [debug];

@NgModule({
  declarations: [MasterPageComponent, HomeComponent, NavComponent, CountrySelectorComponent],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    StoreDevtoolsModule.instrument(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    UserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictActionTypeUniqueness: true,
        strictActionWithinNgZone: true,
        strictStateSerializability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule {
}
