import { observable } from 'mobx';
import { IProduct } from './ProductsStore';
import { CURRENT_PRODUCT } from '../mocks/availableProducts';

export interface ICartStore {
    productsInCart: IProduct[];
    currency: String;
}

class CartStore implements ICartStore {
    @observable public productsInCart = [CURRENT_PRODUCT];
    @observable public currency = 'kr';
}

export const cartStore = new CartStore();
