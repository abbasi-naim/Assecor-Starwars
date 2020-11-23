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
import { PlanetenPageComponent } from './components/planeten-page/planeten-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StarwarsPageComponent,
    FilmePageComponent,
    CharakterePageComponent,
    PlanetenPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
