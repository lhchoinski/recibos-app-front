import { Component, Input } from '@angular/core';
import { IBreadcrumbItem } from '../../types/IBreadcrumbItem';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.html'
})
export class BreadcrumbComponent {
    @Input() items: IBreadcrumbItem[] = [];

    constructor(private translate: TranslateService) {}

    // Translate the label for breadcrumb items
    translateLabel(label: string): string {
        return this.translate.instant(label);
    }
}
