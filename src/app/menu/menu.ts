export class Menu {
    name: string;
    data: string;
    action: string;
    submenu: Array<Menu>;
    selected?: boolean;
    menuId: number;
}