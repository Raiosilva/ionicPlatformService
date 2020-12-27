import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaSolicitacaoPerguntasPage } from './nova-solicitacao-perguntas.page';

const routes: Routes = [
  {
    path: '',
    component: NovaSolicitacaoPerguntasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaSolicitacaoPerguntasPageRoutingModule {}
