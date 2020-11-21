import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmePageComponent } from './components/filme-page/filme-page.component';
import { StarwarsPageComponent } from './components/starwars-page/starwars-page.component';
const routes: Routes = [
  {path : 'starwars',component : StarwarsPageComponent},
  {path : 'film',component : FilmePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
