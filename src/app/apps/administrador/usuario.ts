import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { colDef } from '@bhplugin/ng-datatable';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    templateUrl: './usuario.html',
    styleUrls: ['./custom.css'],
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
export class UsuarioComponent {

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
        { label: 'Users', link: '#', active: true }
    ];

    initData() {
        this.translate.get(['Name']).subscribe(translations => {
            this.cols = [
                { field: 'id', title: 'ID' },
                { field: 'nome', title: translations['Name'] },
                { field: 'login', title: 'login' },
                { field: 'email', title: 'E-mail' },
                { field: 'role', title: 'Role'},
                { field: "status", title:'Status', type: 'bool' },
                { field: 'actions', title: '#' }
            ];
        });

        this.rows = [
            {
                id: 1,
                nome: 'Leanne Graham',
                login: 'leanne.graham',
                email: 'sincere@april.biz',
                role: 'admin',
                status: true,
            },
            {
                id: 2,
                nome: 'Ervin Howell',
                login: 'ervin.howell',
                email: 'shanna@melissa.tv',
                role: 'manager', // Alterado para 'manager'
                status: false,
            },
            {
                id: 3,
                nome: 'Clementine Bauch',
                login: 'clementine.bauch',
                email: 'Nathan@yesenia.net',
                role: 'user',
                status: true,
            },
            {
                id: 4,
                nome: 'Patricia Lebsack',
                login: 'patricia.lebsack',
                email: 'julianne.OConner@kory.org',
                role: 'admin',
                status: true,
            },
            {
                id: 5,
                nome: 'Chelsey Dietrich',
                login: 'chelsey.dietrich',
                email: 'luis@karina.info',
                role: 'user',
                status: false,
            },
            {
                id: 6,
                nome: 'Mrs. Dennis Schulist',
                login: 'dennis.schulist',
                email: 'dennis.schulist@webs.com',
                role: 'manager', // Alterado para 'manager'
                status: true,
            },
            {
                id: 7,
                nome: 'Kurtis Wehner',
                login: 'kurtis.wehner',
                email: 'rory@gmail.com',
                role: 'user',
                status: false,
            },
            {
                id: 8,
                nome: 'Nicholas Runolfsdottir',
                login: 'nicholas.runolfsdottir',
                email: 'nicholas.runolfsdottir@xtra.co.nz',
                role: 'user',
                status: true,
            },
            {
                id: 9,
                nome: 'Glenna Reichert',
                login: 'glenna.reichert',
                email: 'glenna@green.net',
                role: 'admin',
                status: false,
            },
            {
                id: 10,
                nome: 'Clementina DuBuque',
                login: 'clementina.dubuque',
                email: 'clementina.dubuque@unoclean.com',
                role: 'user',
                status: true,
            },
            {
                id: 11,
                nome: 'Clementina DuBuque',
                login: 'clementina.dubuque',
                email: 'clementina.dubuque@unoclean.com',
                role: 'user',
                status: true,
            },
        ];
    }
}
