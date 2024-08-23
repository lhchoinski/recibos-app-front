import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { colDef } from '@bhplugin/ng-datatable';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
    moduleId: module.id,
    templateUrl: './pessoa.html',
    styleUrls: ['../../administrador/custom.css'],
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({
                opacity: 0,
                transform: 'scale(0.95)'
            }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))])
        ])
    ]
})
export class PessoaComponent {

    async showAlertDisable() {
        Swal.fire({
            icon: 'warning',
            title: 'Você tem certeza?',
            text: "O cadastro será desativado!",
            showCancelButton: true,
            confirmButtonText: 'Desativar',
            padding: '2em',
            customClass: 'sweet-alerts',
        }).then((result) => {
            if (result.value) {
                Swal.fire({ title: 'Desativado!', text: 'Pessoa desativada com sucesso.', icon: 'success', customClass: 'sweet-alerts' });
            }
        });
    }

    async showAlertEnable() {
        Swal.fire({
            icon: 'warning',
            title: 'Você tem certeza?',
            text: "O cadastro será ativado!",
            showCancelButton: true,
            confirmButtonText: 'Ativar',
            padding: '2em',
            customClass: 'sweet-alerts',
        }).then((result) => {
            if (result.value) {
                Swal.fire({ title: 'Ativado!', text: 'Pessoa Ativada com sucesso.', icon: 'success', customClass: 'sweet-alerts' });
            }
        });
    }

    async showAlertDelete() {
        Swal.fire({
            icon: 'warning',
            title: 'Você tem certeza?',
            text: "O cadastro será excluido!",
            showCancelButton: true,
            confirmButtonText: 'Deletar',
            padding: '2em',
            customClass: 'sweet-alerts',
        }).then((result) => {
            if (result.value) {
                Swal.fire({ title: 'Deletado!', text: 'Pessoa Deletada com sucesso.', icon: 'success', customClass: 'sweet-alerts' });
            }
        });
    }

    cols: Array<colDef> = [];
    rows: Array<any> = [];

    constructor(
        private translate: TranslateService
    ) {
        this.initData();
    }

    breadcrumbItems = [
        { label: 'Home', link: '/home' },
        { label: 'People', link: '#', active: true }
    ];

    initData() {
        this.translate.get(['Name', 'Company Name', 'Phone','People Type']).subscribe(translations => {
            this.cols = [
                { field: 'id', title: 'ID' },
                { field: 'nome', title: translations['Name'] },
                { field: 'tipo_pessoa', title: translations['People Type'] },
                { field: 'cpf', title: 'CPF' },
                { field: 'cnpj', title: 'CNPJ'},
                { field: 'razao_social', title: translations['Company Name'] },
                { field: 'contato', title: translations['Phone'], type: 'number' },
                { field: 'email', title: 'E-mail' },
                { field: "status", title:'Status', type: 'bool' },
                { field: 'actions', title: '#' }
            ];
        });

        this.rows = [
            {
                id: 1,
                nome: 'Leanne Graham',
                tipo_pessoa: 'Física',
                email: 'sincere@april.biz',
                cpf: '09718371631',
                razao_social: null,
                cnpj: null,
                contato: '(41) 99183-3123',
                status: true,
            },
            {
                id: 2,
                nome: 'Ervin Howell',
                tipo_pessoa: 'Jurídica',
                email: 'shanna@melissa.tv',
                cpf: null,
                razao_social: 'Tech Solutions Ltda',
                cnpj: '07.348.411/0001-35',
                contato: '(11) 99876-5432',
                status: false,
            },
            {
                id: 3,
                nome: 'Clementine Bauch',
                tipo_pessoa: 'Física',
                email: 'Nathan@yesenia.net',
                cpf: '23456789012',
                razao_social: null,
                cnpj: null,
                contato: '(21) 98765-4321',
                status: true,
            },
            {
                id: 4,
                nome: 'Patricia Lebsack',
                tipo_pessoa: 'Jurídica',
                email: 'julianne@melissa.tv',
                cpf: null,
                razao_social: 'Innovate Corp',
                cnpj: '62.345.678/0001-92',
                contato: '(31) 97654-3210',
                status: true,
            },
            {
                id: 5,
                nome: 'Chelsey Dietrich',
                tipo_pessoa: 'Física',
                email: 'kodie@yesenia.net',
                cpf: '34567890123',
                razao_social: null,
                cnpj: null,
                contato: '(41) 91234-5678',
                status: false,
            },
            {
                id: 6,
                nome: 'Dennis Schroeder',
                tipo_pessoa: 'Jurídica',
                email: 'dennis@melissa.tv',
                cpf: null,
                razao_social: 'Health Solutions SA',
                cnpj: '11.111.111/0001-11',
                contato: '(11) 91234-5678',
                status: true,
            },
            {
                id: 7,
                nome: 'Kurtis Weissnat',
                tipo_pessoa: 'Física',
                email: 'kurtis@april.biz',
                cpf: '45678901234',
                razao_social: null,
                cnpj: null,
                contato: '(51) 93456-7890',
                status: true,
            },
            {
                id: 8,
                nome: 'Nicholas Runolfsdottir V',
                tipo_pessoa: 'Jurídica',
                email: 'nicholas@yesenia.net',
                cpf: null,
                razao_social: 'GreenTech Ltda',
                cnpj: '21.234.567/0001-89',
                contato: '(61) 92345-6789',
                status: false,
            },
            {
                id: 9,
                nome: 'Glenna Reichert',
                tipo_pessoa: 'Física',
                email: 'glenna@april.biz',
                cpf: '56789012345',
                razao_social: null,
                cnpj: null,
                contato: '(41) 96543-2109',
                status: true,
            },
            {
                id: 10,
                nome: 'Catherine Doyle',
                tipo_pessoa: 'Jurídica',
                email: 'catherine@melissa.tv',
                cpf: null,
                razao_social: 'EduTech Ltda',
                cnpj: '31.234.567/0001-56',
                contato: '(71) 93456-7890',
                status: false,
            },
            {
                id: 11,
                nome: 'Leanne Graham',
                tipo_pessoa: 'Física',
                email: 'sincere@april.biz',
                cpf: '09718371631',
                razao_social: null,
                cnpj: null,
                contato: '(41) 99183-3123',
                status: true,
            }
        ];
    }
}
