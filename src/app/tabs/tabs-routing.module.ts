import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const perfil: string = localStorage.getItem('platformservice:perfil');

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabDisponiveis',
        children: [
          {
            path: '',
            loadChildren: () => import('../disponiveis/disponiveis.module').then(m => m.DisponiveisPageModule)
          }
        ],
      },
      {
        path: 'tabAceitos',
        loadChildren: () => import('../aceitos/aceitos.module').then(m => m.AceitosPageModule)
      },
      {
        path: 'tabConcluidos',
        loadChildren: () => import('../concluidos/concluidos.module').then(m => m.ConcluidosPageModule)
      },
      {
        path: 'tabPerfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'tabSolicitacoes',
        loadChildren: () => import('../solicitacoes/solicitacoes.module').then(m => m.SolicitacoesPageModule)
      },
      {
        path: 'tabAtendidas',
        loadChildren: () => import('../atendidas/atendidas.module').then(m => m.AtendidasPageModule)
      },
      {
        path: '',
        redirectTo: perfil == 'profissional' ? '/tabs/tabDisponiveis' : '/tabs/tabSolicitacoes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: perfil == 'profissional' ? '/tabs/tabDisponiveis' : '/tabs/tabSolicitacoes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
