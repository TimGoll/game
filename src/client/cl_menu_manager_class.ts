interface IMenuDictionary {
    [key: string]: IMenu;
};

export interface IMenuElement {
    title : string,
    onClick : any,
    width: string,
    height: string,
    posx: string,
    posy: string,
    class: string
}

export interface IMenu {
    id: string,
    title : string,
    elements : IMenuElement[]
}

export class MenuManager {
    menues : IMenuDictionary = {};
    element : HTMLElement;

    constructor(element_id : string) {
        this.element = document.getElementById(element_id);
    }

    register_menu(menu_page : IMenu) {
        this.menues[menu_page.id] = menu_page;
    }

    display_menu(id: string) {
        let menu = this.menues[id];
        if (menu == undefined)
            return;

        this.element.innerHTML = menu.title; // clear menu
        for (let i = 0; i < menu.elements.length; i++) {
            this.element.appendChild(this.generate_element(menu.elements[i]));
        }
    }

    generate_element(element : IMenuElement) : HTMLElement { //TODO: this is a placeholder menu generator
        let button = document.createElement('div');
        button.className = element.class;
        button.innerText = element.title;
        button.addEventListener('click', element.onClick);

        return button;
    }
}