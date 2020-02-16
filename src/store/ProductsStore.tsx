import { observable } from 'mobx';
import { CURRENT_PRODUCT, PRODUCTS } from '../mocks/availableProducts';

export interface IProduct {
    name: string;
    newPrice: number;
    oldPrice: number;
    currency: string;
    variants?: string[];
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
