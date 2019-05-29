import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { DigitalAccountComponent } from './digital-account/digital-account.component';
import { ReceivablesComponent } from './receivables/receivables.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        data: {

            breadcrumbs: 'Página Inicial'
        }
    },
    {
        path: '/painel',
        component: PainelComponent,
        data: {
            breadcrumbs: 'Painel de Gestão'
        }
    },
    {
        path: '',
        component: DigitalAccountComponent,
        pathMatch: '/digital-account',
        data: {
            // Uses static text (Home)
            breadcrumbs: 'Conta Digital'
        }
    },
    {
        path: '/receivables',
        component: ReceivablesComponent,
        data: {
            breadcrumbs: 'Ant. Recebíveis'
        }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [],
    declarations: [],
})
export class AppRoutingModule { }
