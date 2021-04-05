//Задание №1
function transformNumber(number) {
    if (number < 0 || number > 999)
        return {};
    let numRanks = number.toString().split('').map(elem => +elem);
    while (numRanks.length < 3) {
        numRanks.unshift(0);
    }
    return { hundreds: numRanks[0], tens: numRanks[1], units: numRanks[2] };
}

function task1() {
    let userNum = +prompt('Введите число от 0 до 999');
    let result = transformNumber(userNum);
    console.clear();
    console.log(result);
}

// Задание №2
const cart = {
    products: [
        { prodName: 'молоко', count: 1, price: 55 },
        { prodName: 'чай', count: 4, price: 111 },
        { prodName: 'хлеб', count: 2, price: 30 },
    ],
    countBasketPrice() {
        var result = 0;
        for (var good of this.products) {
            result += good.count * good.price;
        }
        return result;
    }
}

function task2() {
    let totalCost = cart.countBasketPrice();
    console.log(totalCost);
}

