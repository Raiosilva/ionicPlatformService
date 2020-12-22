import { Component, OnInit } from '@angular/core';
import { RequestOrder } from 'src/models/RequestOrder.dto';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.page.html',
  styleUrls: ['./solicitacoes.page.scss'],
})
export class SolicitacoesPage implements OnInit {
  list: Array<RequestOrder> = new Array<RequestOrder>();

  constructor() { }

  ngOnInit() {
  }

}
