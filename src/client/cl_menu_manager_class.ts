import { LangHandler } from "./cl_lang_handler";

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

export class Menu {
    menues : IMenuDictionary = {};
    element : HTMLElement;
    displayed: boolean;
    langHandler : LangHandler;

    constructor(element_id : string, langHandler : LangHandler) {
        this.element = document.getElementById(element_id);
        this.langHandler = langHandler;
    }

    /**
     * registers a new menu that can be displayed
     * @param menu_page A menu interface with all its elements
     * @returns returns false when there's already a menu with this ID
     */
    register_menu(menu_page : IMenu) : boolean {
        if (this.menues[menu_page.id] != undefined)
            return false;

        this.menues[menu_page.id] = menu_page;
        return true;
    }

    /**
     * Displays a menu once this function in called. Moreover this function enables the menu resizing
     * @param id An alphanumerical ID that defines the menu that should be rendered. Unknown IDs are ignored.
     * @returns if if was successful
     */
    display_menu(id: string) : boolean {
        let menu = this.menues[id];
        if (menu == undefined)
            return false;

        this.displayed = true;

        this.element.innerHTML = menu.title; // clear menu
        for (let i = 0; i < menu.elements.length; i++) {
            this.element.appendChild(this.generate_element(menu.elements[i]));
        }

        return true;
    }

    /**
     * Removes the current menu and therefore disables menu rescaling
     */
    hide_menu() : void {
        this.element.innerHTML = '';
        this.displayed = false;
    }

    recalc_menu() : void {
        if (!this.displayed)
            return;

        // ToDo recalc size and position values
    }

    generate_element(element : IMenuElement) : HTMLElement { //TODO: this is a placeholder menu generator
        let button = document.createElement('div');
        button.className = element.class;
        button.innerText = this.langHandler.get_string(element.title);
        button.addEventListener('click', element.onClick);

        return button;
    }
}