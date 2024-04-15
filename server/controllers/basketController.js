const {Basket, BasketDevice, User, Device} = require('../models/models')

class BascketController {
    async add(req, res) {
        try {
            const { userEmail, productName } = req.body; // Параметры запроса
            // Находим пользователя по email
            const user = await User.findOne({ where: { email: userEmail } });
        
            // Находим продукт по названию
            const device = await Device.findOne({ where: { name: productName } });
        
            if (!user || !device) {
                return res.status(404).json({ error: 'User or product not found' });
            }
        
            // Создаем запись в таблице Basket для пользователя
            const basket = await Basket.findOrCreate({
                where: { userId: user.id },
                defaults: { userId: user.id }
            });
        
            // Создаем запись в таблице BasketDevice для продукта в корзине
            await BasketDevice.create({
                basketId: basket[0].id,
                deviceId: device.id
            });
        
            res.status(201).json({ message: 'Product added to basket successfully' });
            } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
            }
        }

        async get(req, res) {
            try {
                const userEmail = req.params.email; // Параметр запроса - email пользователя
            
                // Находим пользователя по email
                const user = await User.findOne({ where: { email: userEmail } });
            
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
            
                // Находим корзину пользователя
                const basket = await Basket.findOne({ where: { userId: user.id } });
            
                if (!basket) {
                    return res.status(404).json({ error: 'Basket not found' });
                }
            
                // Получаем продукты в корзине пользователя
                const basketDevices = await BasketDevice.findAll({
                    where: { basketId: basket.id },
                    include: [{ model: Device }]
                });
            
                // const products = basketDevices.map(bd => bd.Device); // Извлекаем сами продукты
            
                res.status(200).json({ basketDevices });
                } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }

    // async checkBasket(req, res){
    //     const { userId, productId } = req.params; 

    //     try {
        
    //         // Поиск корзины пользователя
    //         const basket = await Basket.findOne({
    //             where: { UserId: userId },
    //             include: [{ model: BasketDevice, include: [Device] }]
    //         });
        
    //         if (!basket) {
    //             return res.json({ message: 'The user does not have any items in the basket' });
    //         }
        
    //         // Проверка наличия товара в корзине пользователя
    //         const productInBasket = basket.BasketDevice.find(item => item.DeviceId === productId);
        
    //         if (productInBasket) {
    //             return res.json({ message: 'The product is in the user\'s basket' });
    //         } else {
    //             return res.json({ message: 'The product is not in the user\'s basket' });
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).json({ error: 'Internal Server Error' });
    //     }
    // } 
}

module.exports = new BascketController()
