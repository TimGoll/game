import { MenuManager } from "./cl_menu_manager_class";

let menuManager = new MenuManager('menues');

export function register_menues() : void {
    menuManager.register_menu({
        id: 'main_menu',
        title: 'menues.main.title',
        elements: [
            {
                title: 'menues.main.button.multiplayer',
                onClick: function () {
                    menuManager.display_menu('multiplayer');
                },
                width: '300px',
                height: '100px',
                posx: '0',
                posy: '0',
                class: 'basic_button'
            },
            {
                title: 'menues.main.button.quit',
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
    
    menuManager.register_menu({
        id: 'multiplayer',
        title: 'menues.multiplayer.title',
        elements: [
            {
                title: 'menues.multiplayer.button.host',
                onClick: function () {
                    menuManager.display_menu('multiplayer_host');
                },
                width: '300px',
                height: '100px',
                posx: '0',
                posy: '0',
                class: 'basic_button'
            },
            {
                title: 'menues.multiplayer.button.find',
                onClick: function () {
                    menuManager.display_menu('multiplayer_find');
                },
                width: '300px',
                height: '100px',
                posx: '0',
                posy: '0',
                class: 'basic_button'
            },
            {
                title: 'menues.generic.button.back',
                onClick: function () {
                    menuManager.display_menu('main_menu');
                },
                width: '300px',
                height: '100px',
                posx: '0',
                posy: '0',
                class: 'basic_button'
            }
        ]
    });

    menuManager.register_menu({
        id: 'multiplayer_host',
        title: 'menues.multiplayer.host',
        elements: [
            {
                title: 'menues.multiplayer.button.host.start',
                onClick: function () {
                    menuManager.display_menu('multiplayer_lobby_host');
                },
                width: '300px',
                height: '100px',
                posx: '0',
                posy: '0',
                class: 'basic_button'
            },
            {
                title: 'menues.generic.button.back',
                onClick: function () {
                    menuManager.display_menu('multiplayer');
                },
                width: '300px',
                height: '100px',
                posx: '0',
                posy: '0',
                class: 'basic_button'
            }
        ]
    });

    menuManager.register_menu({
        id: 'multiplayer_find',
        title: 'menues.multiplayer.find',
        elements: [
            {
                title: 'menues.multiplayer.button.find.start',
                onClick: function () {
                    menuManager.display_menu('multiplayer_lobby_client');
                },
                width: '300px',
                height: '100px',
                posx: '0',
                posy: '0',
                class: 'basic_button'
            },
            {
                title: 'menues.generic.button.back',
                onClick: function () {
                    menuManager.display_menu('multiplayer');
                },
                width: '300px',
                height: '100px',
                posx: '0',
                posy: '0',
                class: 'basic_button'
            }
        ]
    });

    menuManager.register_menu({
        id: 'multiplayer_lobby_host',
        title: 'menues.multiplayer.lobby_host',
        elements: [
            {
                title: 'menues.multiplayer.button.lobby_host.start',
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
                title: 'menues.generic.button.back',
                onClick: function () {
                    menuManager.display_menu('multiplayer_host');
                },
                width: '300px',
                height: '100px',
                posx: '0',
                posy: '0',
                class: 'basic_button'
            }
        ]
    });

    menuManager.register_menu({
        id: 'multiplayer_lobby_client',
        title: 'menues.multiplayer.lobby_client',
        elements: [
            {
                title: 'menues.multiplayer.button.lobby_client.ready',
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
                title: 'menues.generic.button.back',
                onClick: function () {
                    menuManager.display_menu('multiplayer_find');
                },
                width: '300px',
                height: '100px',
                posx: '0',
                posy: '0',
                class: 'basic_button'
            }
        ]
    });
    
    
    
    // default menu
    menuManager.display_menu('main_menu');    
}

