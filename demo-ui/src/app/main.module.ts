import {NgModule} from '@angular/core';
import {HomeComponent} from './master-page/home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {NavComponent} from './master-page/nav/nav.component';
import {MasterPageComponent} from './master-page/master-page.component';
import {RouterModule} from '@angular/router';
import {MainRoutes} from './main.routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CountrySelectorComponent} from './master-page/country-selector/country-selector.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from '../environments/environment';
import {UserModule} from './user/user.module';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import {entityConfig} from './data/entity-metadata';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {JsonDateInterceptor} from './Interceptors/json-date.interceptor';
import { LoginComponent } from './authentication/login/login.component';
import {AuthenticationModule} from './authentication/authentication.module';

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

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:8080/api',
  timeout: 1000
};


// export const metaReducers: MetaReducer[] = [debug];

@NgModule({
  declarations: [MasterPageComponent, HomeComponent, NavComponent, CountrySelectorComponent, LoginComponent],
  imports: [
    // CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
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
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    UserModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: false,
        strictActionTypeUniqueness: true,
        strictActionWithinNgZone: true,
        strictStateSerializability: false
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EntityDataModule.forRoot(entityConfig),
    AuthenticationModule
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonDateInterceptor,
      multi: true
    }
  ],
  bootstrap: [MasterPageComponent]
})
export class MainModule {
}
