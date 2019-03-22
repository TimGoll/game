/* manage file imports */ 
import { MenuManager } from "./cl_menu_manager";

let menuManager = new MenuManager('menues');

menuManager.register_menu({
    id: 'main_menu',
    title: 'menues.main.title',
    elements: [
        {
            title: 'menues.main.button.multiplayer',
            onClick: function () {
                menuManager.display_menu('multiplayer');
            }
        },
        {
            title: 'menues.main.button.quit',
            onClick: function () {
                console.log("quit");
            }
        }
    ]
});

menuManager.register_menu({
    id: 'multiplayer',
    title: 'menues.multiplayer.title',
    elements: [
        {
            title: 'menues.multiplayer.button.start',
            onClick: function () {
                console.log("multiplayer start");
            }
        },
        {
            title: 'menues.multiplayer.button.back',
            onClick: function () {
                menuManager.display_menu('main_menu');
            }
        }
    ]
});







// default menu
menuManager.display_menu('main_menu');

