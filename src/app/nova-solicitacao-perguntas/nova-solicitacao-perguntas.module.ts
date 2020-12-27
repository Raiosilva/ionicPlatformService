import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaSolicitacaoPerguntasPageRoutingModule } from './nova-solicitacao-perguntas-routing.module';

import { NovaSolicitacaoPerguntasPage } from './nova-solicitacao-perguntas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaSolicitacaoPerguntasPageRoutingModule
  ],
  declarations: [NovaSolicitacaoPerguntasPage]
})
export class NovaSolicitacaoPerguntasPageModule {}
