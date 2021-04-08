// Задание 1
function drawChessBoard() {
    let boardSize = 10;
    let parent = document.getElementById('chessParent');
    let chessBoard = document.createElement('table');
    parent.appendChild(chessBoard);
    let letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
    for (let i = 0; i < boardSize; i++) {
        let row = document.createElement('tr');
        chessBoard.appendChild(row);
        for (let j = 0; j < boardSize; j++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
            if (i == 0 || i == boardSize - 1) {
                cell.className = "numRow";
                cell.textContent = letters[j];
            } else if (j == 0 || j == boardSize - 1) {
                cell.className = "numCol";
                cell.textContent = boardSize - i - 1;
            } else if (i % 2 == j % 2) {
                cell.className = "whiteCell";
            } else {
                cell.className = "blackCell";
            }

        }
    }
}
drawChessBoard();

// Задание 3

const cart = {
    cartBlock: null,
    showButton: null,
    clearButton: null,
    cartContent: null,

    products: [
        { prodName: 'молоко', count: 1, price: 55 },
        { prodName: 'чай', count: 4, price: 111 },
        { prodName: 'хлеб', count: 2, price: 30 },
    ],

    init() {
        this.showButton = document.getElementById('btnShowBasket');
        this.showButton.addEventListener('click', () => this.clickShowBasket());
        this.cartBlock = document.getElementById('cart');
        let content = document.createElement('p');
        this.cartBlock.appendChild(content);
        this.cartContent = content;
        this.clearButton = document.getElementById('btnClearBasket');
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
        if (this.products.length == 0) {
            this.cartContent.textContent = 'Корзина пуста';
        } else {
            this.cartContent.textContent = `В корзине ${this.products.length} позиций стоимостью ${this.countBasketPrice()}`;
        }
    },

    countBasketPrice() {
        var result = 0;
        for (var good of this.products) {
            result += good.count * good.price;
        }
        return result;
    },

    clearBasket() {
        this.products = [];
        this.showBasket();
    }
}

cart.init();
