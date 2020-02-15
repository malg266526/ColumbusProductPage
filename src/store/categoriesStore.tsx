import { observable } from 'mobx'

interface IProductStore {
    products: String[]
    currentProduct: String
}

class ProductsStore implements IProductStore {
    @observable public products = []
    @observable currentProduct = ''
}

export default new ProductsStore()
