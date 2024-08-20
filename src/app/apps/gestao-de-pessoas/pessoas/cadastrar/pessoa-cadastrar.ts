import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    templateUrl: './pessoa-cadastrar.html',
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({
                opacity: 0,
                transform: 'scale(0.95)'
            }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))])
        ])
    ],
})
export class PessoaCadastrarComponent {

    breadcrumbItems = [
        { label: 'Home', link: '/home' },
        { label: 'Pessoas', link: '/gestao-de-pessoas/pessoas', active: false },
        { label: 'Cadastrar', link: '#', active: true }
    ];

    options = ['Brasileiro', 'Estrangeiro'];
    input4 : string  | undefined;

    options2 = ['Pessoa Fisica','Pessoa Juridica',];
    input5 : string  | undefined;

    options3 = ["AC", "AL", "AP", "AM", "BA", "CE", "DF",
                        "ES", "GO", "MA", "MT", "MS", "MG", "PA",
                        "PB", "PR", "PE", "PI", "RJ", "RN", "RS",
                        "RO", "RR", "SC", "SP", "SE", "TO"
    ];
    input6 : string  | undefined;

    options4 = ["BRASIL", "ESTADOS UNIDOS", "ALEMANHA", "JAPÃO",
                        "FRANÇA", "CHINA", "ÍNDIA", "ARGENTINA",
                        "REINO UNIDO", "CANADÁ"
    ];
    input7 : string  | undefined;

    pageTitle = 'Pessoa';

    queryId: number | null = null;
    currentData: FormGroup;
    isSubmitform = false;
    errorMessage: string | null = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private translate: TranslateService,
        // private meta: MetaService,
        //  private store: AppStoreService,
        // private analistaService: AnalistaService
    ) {
        this.currentData = this.fb.group({
            nome: ['', Validators.required],
            nomeCompleto: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            usuario: [null]
        });
    }

    ngOnInit() {
        this.queryId = this.route.snapshot.params['id'] ? parseInt(this.route.snapshot.params['id']) : null;
        this.pageTitle = this.queryId ? 'edit' : 'create';
        // this.meta.setTitle(this.translate.instant('routes') + ' - ' + this.translate.instant(this.pageTitle));

        if (this.queryId) {
            this.getData();
        }

        // this.store.stopMainLoader();

    }

    getData() {
        // if (this.queryId) {
        //     this.analistaService.findById(this.queryId).subscribe({
        //         next: (r) => {
        //             this.currentData.patchValue({
        //                 nome: r.data.nome,
        //                 nomeCompleto: r.data.nomeCompleto,
        //                 email: r.data.email,
        //                 usuario: r.data.usuario ? { code: r.data.usuario.id, name: r.data.usuario.nome } : null,
        //             });
        //         },
        //         error: (err) => {
        //             this.errorMessage = err;
        //         },
        //     });
        // }
    }

    createJson() {
        return {
            nome: this.currentData.value.nome,
            nomeCompleto: this.currentData.value.nomeCompleto,
            email: this.currentData.value.email,
            usuario: this.currentData.value.usuario ? { id: this.currentData.value.usuario.code } : null,
        };
    }

    saveData() {
        this.isSubmitform = true;
        // this.store.startMainLoader();

        if (this.currentData.invalid) {
            this.isSubmitform = false;
            // this.store.stopMainLoader();
            return;
        }

        // this.analistaService.save(this.createJson(), this.queryId).subscribe({
        //     next: () => {
        //         showSuccessToast().then(() => {
        //             this.redirect();
        //             this.handleReset();
        //             this.store.stopMainLoader();
        //         });
        //     },
        //     error: (error) => {
        //         showErrorToast().then(() => {
        //             this.isSubmitform = false;
        //             this.store.stopMainLoader();
        //             this.errorMessage = error;
        //         });
        //     },
        // });
    }

    redirect() {
        this.router.navigate(['Analistas']);
    }

    handleReset() {
        this.currentData.reset({
            nome: '',
            nomeCompleto: '',
            email: '',
            usuario: null,
        });
    }


}
