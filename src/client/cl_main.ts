/* manage file imports */ 
import { LangHandler } from "./cl_lang_handler";
import { MenuManager } from "./cl_menu_manager";
import * as fs from "fs";
import * as path from 'path';

let langHandler = new LangHandler([
    'main_menu'
]);
let menuManager = new MenuManager(langHandler);

let config;

/**
 * The preinit function reads all needed files in a synchronus order
 */
function preinit() {
    console.log("start loading files ...");
    document.body.innerHTML = fs.readFileSync(path.join(__dirname, './html/templates/cl_main_menu.template.html'), 'utf8');

    config = JSON.parse(fs.readFileSync(path.join(__dirname, '../../config/config.json'), 'utf8'));
    langHandler.set_language(config.lang);
}

/**
 * The init function uses the available data and sets everything up
 */
function init() {
    menuManager.register_main_menu('menu_box');
}

/**
 * The Post init function does some stuff that should be done once everything is finished
 */
function postinit() {
      menuManager.display_default_menu();

      console.log("finished setting up game!");
}

window.onload = function() {
    preinit();
    init();
    postinit();
}