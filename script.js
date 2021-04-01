function isSimple(num) {
    if (num <= 1)
        return false;
    for (var i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

function task1() {
    console.clear();
    var i = 0;
    while (i < 100) {
        if (isSimple(i))
            console.log(i);
        i++;
    }
}

function countBasketPrice(arrCart) {
    var result = 0;
    for (var good of arrCart) {
        result += good[1] * good[2];
    }
    return result;
}

function task2() {
    var cart = [['молоко', 55, 1], ['хлеб', 30, 2], ['чай', 111, 4]]; // товар, цена, количество
    var totalCost = countBasketPrice(cart);
    console.log(totalCost);
}

function task3() {
    console.clear();
    for (var i = 0; i <= 9; console.log(i++));
}

function task4() {
    var line = '';
    for (var i = 0; i < 20; i++) {
        line += 'x';
        console.log(line);
    }
}