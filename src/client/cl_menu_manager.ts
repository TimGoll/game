import { LangHandler } from "./cl_lang_handler";
import { Menu } from "./cl_menu_manager_class";

// menu variables must be global in order to be accessed from the callback functions
let mainMenu : Menu;//handles main menu

export class MenuManager {
    langHandler : LangHandler;

    constructor(langHandler : LangHandler) {
        this.langHandler = langHandler;
    }

    display_default_menu() : void {
        mainMenu.display_menu('main_menu');  
    }

    register_main_menu(element_id : string) : void {
        mainMenu = new Menu(element_id, this.langHandler);
    
        mainMenu.register_menu({
            id: 'main_menu',
            title: 'main_menu.main.title',
            elements: [
                {
                    title: 'main_menu.main.button.multiplayer',
                    onClick: function () {
                        mainMenu.display_menu('multiplayer');
                        
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                },
                {
                    title: 'main_menu.main.button.quit',
                    onClick: function () {
                        console.log("quit");
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                }
            ]
        });
        
        mainMenu.register_menu({
            id: 'multiplayer',
            title: 'main_menu.multiplayer.title',
            elements: [
                {
                    title: 'main_menu.multiplayer.button.host',
                    onClick: function () {
                        mainMenu.display_menu('multiplayer_host');
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                },
                {
                    title: 'main_menu.multiplayer.button.find',
                    onClick: function () {
                        mainMenu.display_menu('multiplayer_find');
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                },
                {
                    title: 'main_menu.generic.button.back',
                    onClick: function () {
                        mainMenu.display_menu('main_menu');
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                }
            ]
        });
    
        mainMenu.register_menu({
            id: 'multiplayer_host',
            title: 'main_menu.multiplayer.host',
            elements: [
                {
                    title: 'main_menu.multiplayer.button.host.start',
                    onClick: function () {
                        mainMenu.display_menu('multiplayer_lobby_host');
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                },
                {
                    title: 'main_menu.generic.button.back',
                    onClick: function () {
                        mainMenu.display_menu('multiplayer');
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                }
            ]
        });
    
        mainMenu.register_menu({
            id: 'multiplayer_find',
            title: 'main_menu.multiplayer.find',
            elements: [
                {
                    title: 'main_menu.multiplayer.button.find.start',
                    onClick: function () {
                        mainMenu.display_menu('multiplayer_lobby_client');
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                },
                {
                    title: 'main_menu.generic.button.back',
                    onClick: function () {
                        mainMenu.display_menu('multiplayer');
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                }
            ]
        });
    
        mainMenu.register_menu({
            id: 'multiplayer_lobby_host',
            title: 'main_menu.multiplayer.lobby_host',
            elements: [
                {
                    title: 'main_menu.multiplayer.button.lobby_host.start',
                    onClick: function () {
                        console.log('start hosted mutiplayer game');
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                },
                {
                    title: 'main_menu.generic.button.back',
                    onClick: function () {
                        mainMenu.display_menu('multiplayer_host');
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                }
            ]
        });
    
        mainMenu.register_menu({
            id: 'multiplayer_lobby_client',
            title: 'main_menu.multiplayer.lobby_client',
            elements: [
                {
                    title: 'main_menu.multiplayer.button.lobby_client.ready',
                    onClick: function () {
                        console.log('send player is ready');
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                },
                {
                    title: 'main_menu.generic.button.back',
                    onClick: function () {
                        mainMenu.display_menu('multiplayer_find');
                    },
                    width: '300px',
                    height: '100px',
                    posx: '0',
                    posy: '0',
                    class: 'basic_button'
                }
            ]
        });
    }
}



