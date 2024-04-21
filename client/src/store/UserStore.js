import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = localStorage.getItem('isAuth') === "true" || false
        this._user = {}
        this._isAdmin = localStorage.getItem('isAdmin') === "true" || false
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
        localStorage.setItem('isAuth', bool)
    }
    setUser(user) {
        this._user = user
    }

    setIsAdmin(bool) {
        this._isAdmin = bool
        localStorage.setItem('isAdmin', bool)
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }

    get isAdmin() {
        return this._isAdmin
    }
}
