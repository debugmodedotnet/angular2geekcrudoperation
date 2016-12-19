import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';

import { app_routing } from './app.routing';

import {DataService} from './shared/data.service';

import { AppComponent }  from './app.component';
import {AddGeekComponent} from './geeks/addgeek.component';
import {ListGeeksComponent} from './geeks/listgeeks.component';
import {HomeGeekComponent} from './geeks/homegeek.component';
import {GeekFilterPipe} from './shared/geekfilter.pipe';

@NgModule({
  imports:      [ BrowserModule, app_routing,HttpModule,FormsModule],
  declarations: [ AppComponent,AddGeekComponent,ListGeeksComponent,HomeGeekComponent,GeekFilterPipe],
  providers:[DataService],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
