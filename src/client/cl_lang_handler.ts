import * as fs from "fs";
import * as path from 'path';

export class LangHandler {
    lang_id : string;
    lang_files : string[];
    lang_strings : any = {};

    constructor(lang_files : string[]) {
        this.lang_files = lang_files;
        this.set_language('en_US');
    }

    set_language (lang_id : string) : void {
        //reset current lang
        this.lang_strings = {};

        this.lang_id = lang_id;
        let lang_path = path.join(__dirname, '../../lang/', lang_id);

        for (let lang_file of this.lang_files) {
            try {
                this.lang_strings[lang_file] = JSON.parse(fs.readFileSync(path.join(lang_path, lang_file) + '.json', 'utf8'));
            } catch (e) {
                //file not found
            }
        }
    }

    get_string (string_id : string) : string {
        let lang_string = this.resolve(string_id, this.lang_strings);

        if (lang_string == null)
            return 'ERROR: ' + string_id + ' (' + this.lang_id + ')';

        return lang_string;
    }

    // HELPER
    resolve(path : string, obj : any) {
        return path.split('.').reduce(function(prev, curr) {
            return prev ? prev[curr] : null
        }, obj || self)
    }
}