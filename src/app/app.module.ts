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
import { PanelComponent } from './panel/panel.component';
import { DigitalAccountComponent } from './digital-account/digital-account.component';
import { ReceivablesComponent } from './receivables/receivables.component';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { PanelService } from './panel/panel.service';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeaderComponent,
        MenuComponent,
        PanelComponent,
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
        BsDropdownModule.forRoot(),
        McBreadcrumbsModule.forRoot()
    ],
    providers: [
        MenuService,
        UserService,
        PanelService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
