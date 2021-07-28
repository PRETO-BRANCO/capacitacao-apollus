import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DiscoEdicaoPageComponent} from './disco-edicao-page/disco-edicao-page.component';
import {DiscoCadastroPageComponent} from './disco-cadastro-page/disco-cadastro-page.component';
import {DiscoListaPageComponent} from './disco-lista-page/disco-lista-page.component';
import {DiscoCardComponent} from './disco-card/disco-card.component';
import {DiscoFormComponent} from './disco-form/disco-form.component';

import {DiscosService} from '../discos.service';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [DiscoEdicaoPageComponent, DiscoCadastroPageComponent, DiscoListaPageComponent, DiscoCardComponent, DiscoFormComponent],
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
  exports: [DiscoEdicaoPageComponent, DiscoCadastroPageComponent, DiscoListaPageComponent],
  providers: [DiscosService]
})
export class DiscoModule {}
