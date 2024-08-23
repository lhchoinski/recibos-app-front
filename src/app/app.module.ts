import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Routes
import { routes } from './app.route';

import { AppComponent } from './app.component';

// service
import { AppService } from './service/app.service';

// store
import { StoreModule } from '@ngrx/store';
import { indexReducer } from './store/index.reducer';

// i18n
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// perfect-scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar';

// apexchart
import { NgApexchartsModule } from 'ng-apexcharts';

// highlightjs
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

// tippy
import { NgxTippyModule } from 'ngx-tippy-wrapper';

// headlessui
import { MenuModule } from 'headlessui-angular';

// modal
import { ModalModule } from 'angular-custom-modal';

// sortable
import { SortablejsModule } from '@dustfoundation/ngx-sortablejs';

// quill editor
import { QuillModule } from 'ngx-quill';

// dashboard
import { HomeComponent } from './apps/home/home';

// pages
import { KnowledgeBaseComponent } from './pages/knowledge-base';
import { FaqComponent } from './pages/faq';

// Layouts
import { AppLayout } from './layouts/app-layout';
import { AuthLayout } from './layouts/auth-layout';

import { HeaderComponent } from './layouts/header/header';
import { FooterComponent } from './layouts/footer/footer';
import { SidebarComponent } from './layouts/sidebar/sidebar';
import { IconModule } from './shared/icon/icon.module';
import { RelatorioPessoaComponent } from './apps/relatorios/relatorio-mensal/pessoas/pessoa';
import { RelatorioReciboComponent } from './apps/relatorios/relatorio-mensal/recibos/recibo';
import { GerarReciboComponent } from './apps/recibos/gerarRecibos/gerarRecibo';
import { PessoaComponent } from './apps/gestao-de-pessoas/pessoas/pessoa';
import { UsuarioComponent } from './apps/administrador/usuario';
import { RecibosHistoricoComponent } from './apps/recibos/historico/recibo';
import { PessoaCadastrarComponent } from './apps/gestao-de-pessoas/pessoas/cadastrar/pessoa-cadastrar';
import { UsuarioCadastrarComponent } from './apps/administrador/cadastrar/usuario-cadastrar';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { BreadcrumbComponent } from './elements/breadcrumb/breadCrumb';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectStatusComponent } from './components/select/select-status/select-status';
import { heroUsers } from '@ng-icons/heroicons/outline';

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
        BrowserModule,
        BrowserModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        }),
        MenuModule,
        StoreModule.forRoot({ index: indexReducer }),
        NgxTippyModule,
        NgApexchartsModule,
        NgScrollbarModule.withConfig({
            visibility: 'hover',
            appearance: 'standard'
        }),
        HighlightModule,
        SortablejsModule,
        ModalModule,
        QuillModule.forRoot(),
        IconModule,
        DataTableModule,
        NgSelectModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        HomeComponent,
        AppLayout,
        AuthLayout,
        KnowledgeBaseComponent,
        FaqComponent,

        RelatorioPessoaComponent,
        RelatorioReciboComponent,
        GerarReciboComponent,
        RecibosHistoricoComponent,
        PessoaComponent,
        PessoaCadastrarComponent,
        UsuarioComponent,
        UsuarioCadastrarComponent,

        SelectStatusComponent,

        BreadcrumbComponent


    ],

    providers: [
        AppService,
        Title,
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    json: () => import('highlight.js/lib/languages/json'),
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    xml: () => import('highlight.js/lib/languages/xml')
                }
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
