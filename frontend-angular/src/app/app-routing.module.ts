import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiscoListaPageComponent } from './disco/disco-lista-page/disco-lista-page.component';
import { DiscoCadastroPageComponent } from './disco/disco-cadastro-page/disco-cadastro-page.component';
import { DiscoEdicaoPageComponent } from './disco/disco-edicao-page/disco-edicao-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: DiscoListaPageComponent },
  { path: 'cadastro', component: DiscoCadastroPageComponent },
  { path: 'edicao/:id', component: DiscoEdicaoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
