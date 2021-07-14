import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DiscoCardComponent } from './disco-card/disco-card.component';
import { DiscoListaPageComponent } from './disco-lista-page/disco-lista-page.component';

@NgModule({
  declarations: [AppComponent, CardComponent, DiscoCardComponent, DiscoListaPageComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
