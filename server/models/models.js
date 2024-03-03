const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketProducts = sequelize.define('basket_products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Products = sequelize.define('products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    rating: {type: DataTypes.INTEGER, unique: true, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}, 
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.STRING, allowNull: false}
})

const ProductInfo = sequelize.define('product_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    descriptions: {type: DataTypes.STRING, allowNull: false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketProducts)
BasketProducts.belongsTo(Basket)

Type.hasMany(Products)
Products.belongsTo(Type)

Products.hasMany(Rating)
Rating.belongsTo(Products)

Products.hasMany(BasketProducts)
BasketProducts.belongsTo(Products)

Products.hasMany(ProductInfo)
ProductInfo.belongsTo(Products)

module.exports = {
    User, 
    Products, 
    ProductInfo,
    Basket,
    BasketProducts,
    Type, 
    Rating,
    
}