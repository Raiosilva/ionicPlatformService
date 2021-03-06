import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NovaSolicitacaoPerguntasPage } from './nova-solicitacao-perguntas.page';

const routes: Routes = [
  {
    path: '',
    component: NovaSolicitacaoPerguntasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class NovaSolicitacaoPerguntasPageRoutingModule {}
