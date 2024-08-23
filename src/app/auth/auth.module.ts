import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// icon
import { IconModule } from 'src/app/shared/icon/icon.module';

// headlessui
import { MenuModule } from 'headlessui-angular';
import { BoxedSigninComponent } from './boxed-signin';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    { path: 'auth/boxed-signin', component: BoxedSigninComponent, title: 'Login | SGR - GTI Developer' },
];
@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, MenuModule, IconModule, TranslateModule],
    declarations: [
        BoxedSigninComponent,
    ],
})
export class AuthModule {}
