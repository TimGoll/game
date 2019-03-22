interface IMenuDictionary {
    [key: string]: IMenu;
};

export interface IMenuElement {
    title : string,
    onClick : any
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
        console.log(this.element);
    }

    register_menu(menu_page : IMenu) {
        this.menues[menu_page.id] = menu_page;
    }

    display_menu(id: string) {
        this.element.innerHTML = this.menues[id].title; // clear menu
        for (let i = 0; i < this.menues[id].elements.length; i++) {
            this.element.appendChild(this.generate_element(this.menues[id].elements[i]));
        }
    }

    generate_element(element : IMenuElement) : HTMLElement { //TODO: this is a placeholder menu generator
        let p = document.createElement('p')

        let new_elem = document.createElement('a');
        new_elem.innerText = element.title;
        new_elem.addEventListener('click', element.onClick);

        p.appendChild(new_elem);

        return p;
    }
}