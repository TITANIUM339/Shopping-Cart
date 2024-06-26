function getTotalItemsInCart(cart) {
    return cart.reduce((total, item) => total + item.count, 0);
}

const MAX_CART_SIZE = 99;

const MAX_ITEM_COUNT = 10;

export { getTotalItemsInCart, MAX_CART_SIZE, MAX_ITEM_COUNT };
