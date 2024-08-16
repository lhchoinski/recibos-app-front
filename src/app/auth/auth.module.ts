import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// icon
import { IconModule } from 'src/app/shared/icon/icon.module';

// headlessui
import { MenuModule } from 'headlessui-angular';
import { BoxedSigninComponent } from './boxed-signin';

const routes: Routes = [
    { path: 'auth/boxed-signin', component: BoxedSigninComponent, title: 'Login | Sistema - GTI Developer' },
];
@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, MenuModule, IconModule],
    declarations: [
        BoxedSigninComponent,
    ],
})
export class AuthModule {}
