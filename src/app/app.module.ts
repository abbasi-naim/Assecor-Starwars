import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navBar/navbar/navbar.component';
import { StarwarsPageComponent } from './components/starwars-page/starwars-page.component';
import { FilmePageComponent } from './components/filme-page/filme-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CharakterePageComponent } from './components/charaktere-page/charaktere-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StarwarsPageComponent,
    FilmePageComponent,
    CharakterePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
