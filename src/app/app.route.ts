import { Routes } from '@angular/router';

// dashboard
import { HomeComponent } from './apps/home/home';

// layouts
import { AppLayout } from './layouts/app-layout';
import { AuthLayout } from './layouts/auth-layout';

// pages
import { GerarReciboComponent } from './apps/recibos/gerarRecibos/gerarRecibo';
import { RecibosHistoricoComponent } from './apps/recibos/historico/recibo';
import { PessoaComponent } from './apps/gestao-de-pessoas/pessoas/pessoa';
import { RelatorioReciboComponent } from './apps/relatorios/relatorio-mensal/recibos/recibo';
import { RelatorioPessoaComponent } from './apps/relatorios/relatorio-mensal/pessoas/pessoa';
import { UsuarioComponent } from './apps/administrador/usuario';
import { PessoaCadastrarComponent } from './apps/gestao-de-pessoas/pessoas/cadastrar/pessoa-cadastrar';
import { UsuarioCadastrarComponent } from './apps/administrador/cadastrar/usuario-cadastrar';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [

            { path: 'home', component: HomeComponent, title: 'Home | Sistema - GTI Developer' },
            { path: 'recibos/gerar-recibo', component: GerarReciboComponent, title: 'Recibos | Gerar Recibos' },
            { path: 'recibos/historico', component: RecibosHistoricoComponent, title: 'Recibos | Histórico' },
            { path: 'gestao-de-pessoas/pessoas', component: PessoaComponent, title: 'Gestão De Pessoas | Pessoas' },
            { path: 'gestao-de-pessoas/pessoas/cadastrar', component: PessoaCadastrarComponent, title: 'Gestão De Pessoas | Pessoas - Cadastrar' },
            { path: 'relatorios/relatorio-mensal/recibos', component: RelatorioReciboComponent, title: 'Relatórios | Recibos' },
            { path: 'relatorios/relatorio-mensal/pessoas', component: RelatorioPessoaComponent, title: 'Relatórios | Pessoas' },
            { path: 'administrador/usuarios', component: UsuarioComponent, title: 'Administrador | Usuários' },
            { path: 'administrador/usuarios/cadastrar', component: UsuarioCadastrarComponent, title: 'Administrador | Usuários - Cadastrar' },

        ],
    },

    {
        path: '',
        component: AuthLayout,
        children: [
            // pages
            { path: '', loadChildren: () => import('./pages/pages.module').then((d) => d.PagesModule) },

            // auth
            { path: '', loadChildren: () => import('./auth/auth.module').then((d) => d.AuthModule) },
        ],
    },
];
