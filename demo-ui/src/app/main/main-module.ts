import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {NavComponent} from './nav/nav.component';
import {MasterPageComponent} from './master-page.component';
import {RouterModule} from '@angular/router';
import {MainRoutes} from '../routing/mainRouting';



@NgModule({
  declarations: [MasterPageComponent, HomeComponent, NavComponent],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
