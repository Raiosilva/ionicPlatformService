import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaSolicitacaoSubCategoriaPageRoutingModule } from './nova-solicitacao-sub-categoria-routing.module';

import { NovaSolicitacaoSubCategoriaPage } from './nova-solicitacao-sub-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaSolicitacaoSubCategoriaPageRoutingModule
  ],
  declarations: [NovaSolicitacaoSubCategoriaPage]
})
export class NovaSolicitacaoSubCategoriaPageModule {}
