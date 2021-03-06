import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './controlers/app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidelistComponent } from './components/sidelist/sidelist.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidelistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
