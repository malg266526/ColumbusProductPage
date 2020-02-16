import { action, observable } from 'mobx';
import { IProduct } from './ProductsStore';
import { CURRENT_PRODUCT } from '../mocks/availableProducts';

export interface ICartStore {
    productsInCart: IProduct[];
    currency: string;
    addToCart: (product: IProduct) => void;
}

class CartStore implements ICartStore {
    @observable public productsInCart: IProduct[] = [CURRENT_PRODUCT];
    @observable public currency = 'kr';

    @action addToCart(product: IProduct) {
        this.productsInCart.push(product);
    }
}

export const cartStore = new CartStore();
