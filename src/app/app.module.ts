import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navBar/navbar/navbar.component';
import { StarwarsPageComponent } from './components/starwars-page/starwars-page.component';
import { FilmePageComponent } from './components/filme-page/filme-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StarwarsPageComponent,
    FilmePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
