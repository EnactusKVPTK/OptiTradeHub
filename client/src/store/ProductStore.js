import {makeAutoObservable} from 'mobx'

export default class ProductStore {
    constructor() {
        this._type = [
            {id: 1, name: "Техника"},
            {id: 2, name: "Остальное"}
        ]
        this._products = [
            {id: 1, name: "Iphone 12", price: 25000, rating: 5, img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpriceintanzania.com%2Fwp-content%2Fuploads%2F2020%2F10%2FApple-iPhone-12-Pro.jpg&f=1&nofb=1&ipt=0d1abe60601dd1e88ed197472a3c8c46c2d033600997415b2a7ba0c4ce5be281&ipo=images"},
            {id: 2, name: "Iphone 12", price: 25000, rating: 5, img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpriceintanzania.com%2Fwp-content%2Fuploads%2F2020%2F10%2FApple-iPhone-12-Pro.jpg&f=1&nofb=1&ipt=0d1abe60601dd1e88ed197472a3c8c46c2d033600997415b2a7ba0c4ce5be281&ipo=images"},
            {id: 3, name: "Iphone 12", price: 25000, rating: 5, img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpriceintanzania.com%2Fwp-content%2Fuploads%2F2020%2F10%2FApple-iPhone-12-Pro.jpg&f=1&nofb=1&ipt=0d1abe60601dd1e88ed197472a3c8c46c2d033600997415b2a7ba0c4ce5be281&ipo=images"},
            {id: 4, name: "Iphone 12", price: 25000, rating: 5, img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpriceintanzania.com%2Fwp-content%2Fuploads%2F2020%2F10%2FApple-iPhone-12-Pro.jpg&f=1&nofb=1&ipt=0d1abe60601dd1e88ed197472a3c8c46c2d033600997415b2a7ba0c4ce5be281&ipo=images"},
            {id: 5, name: "Iphone 12", price: 25000, rating: 5, img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpriceintanzania.com%2Fwp-content%2Fuploads%2F2020%2F10%2FApple-iPhone-12-Pro.jpg&f=1&nofb=1&ipt=0d1abe60601dd1e88ed197472a3c8c46c2d033600997415b2a7ba0c4ce5be281&ipo=images"}
        ] 
        this._selectedType = {}
        makeAutoObservable(this)
    }
    setType(type) {
        this._type = type
    }
    setProducts(product) {
        this._products = product
    }
    setSelectedType(type){
        this._selectedType = type
    }
    get type(){
        return this._type
    }
    get products() {
        return this._products
    }
    get selectedType(){
        return this._selectedType
    }
}