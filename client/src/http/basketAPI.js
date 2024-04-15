import {$authHost, $host} from "./index";

export const addBasket = async (userEmail, productName) => {
    const {data} = await $host.post('api/basket/add', {userEmail, productName})
    return data
}

export const getBasket = async (email) => {
    const {data} = await $host.get('api/basket/get/' + email)
    return data
}

// export const checkBasket = async (userId, productId) => {
//     const {data} = await $host.get('api/basket/checkBasket/user', + userId + '/product' + productId)
//     return data
// }
