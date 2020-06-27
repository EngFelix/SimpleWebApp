import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {NavComponent} from './nav/nav.component';
import {MasterPageComponent} from './master-page.component';
import {RouterModule} from '@angular/router';
import {MainRoutes} from './main-routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CountrySelectorComponent } from './country-selector/country-selector.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [MasterPageComponent, HomeComponent, NavComponent, CountrySelectorComponent],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory:  HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
