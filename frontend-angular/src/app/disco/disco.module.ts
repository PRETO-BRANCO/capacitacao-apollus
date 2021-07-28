import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoEdicaoPageComponent } from './disco-edicao-page/disco-edicao-page.component';
import { DiscoCadastroPageComponent } from './disco-cadastro-page/disco-cadastro-page.component';
import { DiscoListaPageComponent } from './disco-lista-page/disco-lista-page.component';
import { DiscoCardComponent } from './disco-card/disco-card.component';
import { DiscoFormComponent } from './disco-form/disco-form.component';

import { ReactiveFormsModule } from '@angular/forms';

import { DiscosService } from '../discos.service';

@NgModule({
  declarations: [
    DiscoEdicaoPageComponent,
    DiscoCadastroPageComponent,
    DiscoListaPageComponent,
    DiscoCardComponent,
    DiscoFormComponent
  ],
  exports: [
    DiscoEdicaoPageComponent,
    DiscoCadastroPageComponent,
    DiscoListaPageComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [DiscosService]
})
export class DiscoModule {}
