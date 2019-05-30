import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelComponent } from './panel/panel.component';
import { DigitalAccountComponent } from './digital-account/digital-account.component';
import { ReceivablesComponent } from './receivables/receivables.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: DashboardComponent,
        data: {
            breadcrumbs: true,
            text: 'Página Inicial'
        },
        children: [
            {
                path: 'panel',
                component: PanelComponent,
                data: {
                    breadcrumbs: true,
                    text: 'Painel de Gestão',
                }
            },
            {
                path: 'digital-account',
                component: DigitalAccountComponent,
                data: {
                    breadcrumbs: true,
                    text: 'Conta Digital'
                }
            },
            {
                path: 'receivables',
                component: ReceivablesComponent,
                data: {
                    breadcrumbs: true,
                    text: 'Ant. Recebíveis'
                }
            },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule { }
