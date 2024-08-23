import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    templateUrl: './select-status.html',
    selector: 'select-status',
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
export class SelectStatusComponent {

    options: { label: string, value: boolean }[] = [];
    input: boolean = true;

    constructor(private translate: TranslateService) {
        this.translate.get(['Enable', 'Disable']).subscribe(translations => {
            this.options = [
                { label: translations['Enable'], value: true },
                { label: translations['Disable'], value: false }
            ];
        });
    }
}
