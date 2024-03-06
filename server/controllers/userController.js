const ApiError = require("../error/ApiError")

class UserController {
    async registration(req, res){

    }

    async login(req, res){
        
    }

    async auth(req, res, next){
        const {id} = req.query
        if (!id){
            next(ApiError.badRequest('not specified'))
        }
        req.json("OK")
    }
}

module.exports = new UserController()