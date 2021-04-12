
const cart = {
    cartBlock: null,
    showButton: null,
    clearButton: null,

    products: [
        { prodId: 221, prodName: 'молоко', count: 1, price: 55 },
        { prodId: 123, prodName: 'чай', count: 4, price: 111 },
        { prodId: 675, prodName: 'хлеб', count: 2, price: 30 },
    ],

    init() {
        this.showButton = document.getElementById('btnShowBasket');
        this.showButton.addEventListener('click', () => this.clickShowBasket());
        this.cartBlock = document.getElementById('cart');
        this.clearButton = document.createElement('button');
        this.clearButton.innerHTML = 'Очистить корзину';
    },

    refreshBasket() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.appendChild(this.clearButton);
        this.clearButton.addEventListener('click', () => this.clearBasket());
    },

    clickShowBasket() {
        if (this.cartBlock.className == 'hiddenCart') {
            this.cartBlock.className = 'visibleCart';
            this.showBasket();
        } else {
            this.cartBlock.className = 'hiddenCart';
        }
    },

    showBasket() {
        this.refreshBasket();
        if (this.products.length == 0) {
            this.cartBlock.insertAdjacentHTML('beforeend','<p>Корзина пуста</p>');
        } else {
            for (let item of this.products) {
                let line = `<div>
                <h4>${item.prodName}</h4>
                <p>${item.price} руб.</p>
                <p>${item.count} </p>
                </div>`;
                this.cartBlock.insertAdjacentHTML('beforeend', line);
            }
            this.cartBlock.insertAdjacentHTML('beforeend',
                `<p>В корзине ${this.products.length} позиций стоимостью ${this.countBasketPrice()}</p>`);

        }
    },

    countBasketPrice() {
        let result = 0;
        for (let good of this.products) {
            result += good.count * good.price;
        }
        return result;
    },

    clearBasket() {
        this.products = [];
        this.showBasket();
    },

    addToBasket(id, name, price) {
        let found = false;
        for( let item of this.products ) {
            if (item.prodId == id) {
                item.count++;
                found = true;
                break;
            }
        }
        if (!found) {
            this.products.push({ prodId: id, prodName: name, count: 1, price: price })
        }
        this.showBasket();
    }

}

const product = {
    cart: null,
    catalogBlock: null,

    productsList: [
        { prodId: 221, prodName: 'молоко', price: 55 },
        { prodId: 123, prodName: 'чай', price: 111 },
        { prodId: 675, prodName: 'хлеб', price: 30 },
    ],

    init(cart) {
        this.catalogBlock = document.getElementById('catalogBlock');
        this.cart = cart;
        this.showProductList();
    },

    showProductList() {
        for (let prod of this.productsList) {
            this.showProductCard(prod);
        }
    },

    showProductCard(prod) {
        let line = `<div>
        <h4>${prod.prodName}</h4>
        <p>${prod.price} руб.</p>
        </div>`;
        this.catalogBlock.insertAdjacentHTML('beforeend', line);
        let btn = document.createElement('button');
        btn.innerHTML = 'Купить';
        this.catalogBlock.appendChild(btn);
        btn.addEventListener('click',
            () => this.cart.addToBasket(prod.prodId, prod.prodName, prod.price));
    }
}

cart.init();
product.init(cart);
