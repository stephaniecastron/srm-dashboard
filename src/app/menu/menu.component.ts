import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { MenuService } from './menu.service';
import { Router } from '@angular/router';

@Component({
    selector: 'srm-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    menu: Array<Menu>;
    searchItems: Array<Object>;
    selectedItem: Object;

    constructor(private menuService: MenuService, private router: Router) {
        this.searchItems = new Array<Object>();
        this.selectedItem = null;
    }

    ngOnInit() {
        setTimeout(() => {
            this.menuService.getMenu()
                .subscribe((menus) => {
                    this.menu = menus;
                    for (const menu of menus) {
                        const name = menu.name;
                        this.searchItems.push({
                            link: menu.action,
                            name: name
                        });
                    }
                }, (err) => console.error(err));
        }, 1000);
    }

    navigate(event): void {
        this.router.navigate([event.item.link]);
        this.selectedItem = null;
    }

    selected(item: Menu): void {
        for (const m of this.menu) {
            if (m.menuId !== item.menuId) {
                m.selected = false;
            }
        }
        item.selected = !item.selected;
    }

}
