import { observable } from 'mobx'

interface ICartStore {
    productsInCart: String[]
}

class CartStore implements ICartStore {
    @observable public productsInCart = []
}

export default new CartStore()
