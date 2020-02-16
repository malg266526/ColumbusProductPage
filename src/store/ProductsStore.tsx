import { observable } from 'mobx';
import { CURRENT_PRODUCT, PRODUCTS } from '../mocks/availableProducts';

export interface IProduct {
    name: String;
    newPrice: Number;
    oldPrice: Number;
    currency: String;
    variants?: String[];
}

interface IProductStore {
    products: IProduct[];
    currentProduct: IProduct;
}

class ProductsStore implements IProductStore {
    @observable public products = PRODUCTS;
    @observable currentProduct = CURRENT_PRODUCT;
}

export const productStore = new ProductsStore();
