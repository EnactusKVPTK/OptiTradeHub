const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo} = require('../models/models')
const { type } = require('os')

class ProductController {
    async create(req, res, next){
        try{
            let {name, price, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                )
            }

            const product = await Product.create({name, price, typeId, fileName})
            
            return res.json(product)
        } catch(e) {
            nextTick(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        const {typeId, limit, page} = req.body
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products;
        if(!typeId) {
            products = await Product.findAndCountAll({limit, offset})
        } 
        if(typeId){
            products = await Product.findAndCountAll({where:{typeId}, limit, offset})
        }
        return res.json(products)
    }

    async getOne(req, res){
        const {id} = req.params
        const product = await Product.findAll(
            {
                where: {id},
                include: [{model: ProductInfo, as: 'info'}]
            }
        )
        return res.json(product)
    }
}

module.exports = new ProductController()