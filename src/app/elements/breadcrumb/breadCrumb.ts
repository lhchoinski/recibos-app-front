import { Component, Input } from '@angular/core';
import { IBreadcrumbItem } from '../../types/IBreadcrumbItem';


@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.html'
})
export class BreadcrumbComponent {
    @Input() items: IBreadcrumbItem[] = [];
}
