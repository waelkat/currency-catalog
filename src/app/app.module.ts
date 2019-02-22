import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrenciesListComponent } from './currencies/list/currencies-list.component';
import { CurrenciesItemComponent } from './currencies/item/currencies-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesListComponent,
    CurrenciesItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
