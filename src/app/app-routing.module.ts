import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharakterePageComponent } from './components/charaktere-page/charaktere-page.component';
import { FilmePageComponent } from './components/filme-page/filme-page.component';
import { PlanetenPageComponent } from './components/planeten-page/planeten-page.component';
import { StarwarsPageComponent } from './components/starwars-page/starwars-page.component';
const routes: Routes = [
  { path: '', component: StarwarsPageComponent },
  { path: 'starwars', component: StarwarsPageComponent },
  { path: 'film', component: FilmePageComponent },
  { path: 'character', component: CharakterePageComponent },
  { path: 'planet', component: PlanetenPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
