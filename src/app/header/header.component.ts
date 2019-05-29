import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user/user.service';
import { User } from '../common/user/user';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'srm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    user: User;

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.userService.getUser()
            .subscribe((user) => {
                this.user = user;
            }, (err) => {
                console.log(err);
            });
    }

}
