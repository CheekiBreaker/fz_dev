import {makeAutoObservable} from 'mobx';
export default class MenuStore {
    constructor() {
        this._menu = [
            {id:1, b:1, g:7,y:9, countxe:10, title:'kotletka'},
            {id:2, b:2, g:7,y:9, countxe:10, title:'kotletk'},
            {id:3, b:3, g:7,y:9, countxe:10, title:'kotlea'},
            {id:4, b:4, g:7,y:9, countxe:10, title:'ktka'},
            {id:5, b:5, g:7,y:9, countxe:10, title:'klava'},
            {id:6, b:6, g:7,y:9, countxe:10, title:'kocka'},
            ];
        makeAutoObservable(this);
    }

    setMenu(menu) {
        this._menu = menu;
    }
    get menu() {
        return this._menu;
    }
}