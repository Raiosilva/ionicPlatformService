import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaSolicitacaoSubCategoriaPage } from './nova-solicitacao-sub-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: NovaSolicitacaoSubCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaSolicitacaoSubCategoriaPageRoutingModule {}
