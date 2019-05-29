import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/menu.service';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { UserService } from './common/user/user.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PainelComponent } from './painel/painel.component';
import { DigitalAccountComponent } from './digital-account/digital-account.component';
import { ReceivablesComponent } from './receivables/receivables.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeaderComponent,
        MenuComponent,
        PainelComponent,
        DigitalAccountComponent,
        ReceivablesComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        TypeaheadModule.forRoot(),
        BsDropdownModule.forRoot()
    ],
    providers: [
        MenuService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
