function task1() {
    var a = 1, b = 1, c, d;
    c = ++a; alert(c);           // 2 Префиксный инкремент возвращает новое значение переменной а (после увеличения на 1)
    d = b++; alert(d);           // 1 Постфиксный инкремент возвращает старое значение переменной b (до увеличения на 1)
    c = (2 + ++a); alert(c);      // 5 Вычисление производится с увеличенным значением a
    d = (2 + b++); alert(d);      // 4 Вычисление производится со старым значением b
    alert(a);                    // 3 В итоге обе переменные были инкрементированы одинаковое количество раз и их значения равны.
    alert(b);                    // 3
}

function task2() {
    var a = 2;
    var x = 1 + (a *= 2);
    alert(x); // Результат: 5 
}

function task3() {
    var a = Math.floor((Math.random() - 0.5) * 200);
    var b = Math.floor((Math.random() - 0.5) * 200);
    var resLine;
    if (a >= 0 && b >= 0) {
        resLine = a + ' - ' + b + ' = ' + (a - b);
    }
    else if (a < 0 && b < 0) {
        resLine = a + ' * ' + b + ' = ' + (a * b);
    }
    else {
        resLine = a + ' + ' + b + ' = ' + (a + b);
    }
    alert(resLine);
}

function task4() {
    var num = +prompt('Введите число от 0 до 15');
    console.clear();
    switch (num) {
        case 0:
            console.log('0');
        case 1:
            console.log('1');
        case 2:
            console.log('2');
        case 3:
            console.log('3');
        case 4:
            console.log('4');
        case 5:
            console.log('5');
        case 6:
            console.log('6');
        case 7:
            console.log('7');
        case 8:
            console.log('8');
        case 9:
            console.log('9');
        case 10:
            console.log('10');
        case 11:
            console.log('11');
        case 12:
            console.log('12');
        case 13:
            console.log('13');
        case 14:
            console.log('14');
        case 15:
            console.log('15');
            break;
        default:
            console.error('Ошибка ввода!');
    }
}

function mySum(a, b) {
    return a + b;
}

function myMult(a, b) {
    return a * b;
}

function mySub(a, b) {
    return a - b;
}

function myDiv(a, b) {
    return a / b;
}

function task5() {
    var a = +prompt('Введите число a: ');
    var b = +prompt('Введите число b: ');
    console.clear();

    console.log('a + b = ' + mySum(a, b));
    console.log('a - b = ' + mySub(a, b));
    console.log('a * b = ' + myMult(a, b));
    console.log('a / b = ' + myDiv(a, b));

}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return mySum(arg1, arg2);
            break;
        case '-':
            return mySub(arg1, arg2);
            break;
        case '*':
            return myMult(arg1, arg2);
            break;
        case '/':
            return myDiv(arg1, arg2);
            break;
        default:
            console.log('Некорректная операция');
            return NaN;
    }
}

function task6() {
    var a = +prompt('Введите число a: ');
    var b = +prompt('Введите число b: ');
    var op = prompt('Введите операцию (+-*/) ');

    alert(a + op + b + ' = ' + mathOperation(a, b, op));
}

function task7() {
    console.clear();

    console.log(null == 0); // false
    console.log(null >= 0); // true
    console.log(null <= 0); // true
    console.log(null > 0); // false
    console.log(null < 0); // false

    // Для оператора == работает особое правило: null не равен ничему другому,
    // для операторов < и > - работает абстрактный алгоритм сравнения для отношений.
    // В то время как для вычисления (null >= 0) вычисляется сначала (null < 0), 
    // затем возвращается отрицание этого результата. 
    // То есть: если x < 0 равно false, следовательно x >= 0 равно true.       
}


function power(val, pow) {
    if (pow == 0)
        return 1;
    if (pow < 0)
        return 1 / power(val, -pow);
    return val * power(val, pow - 1);
}

function task8() {
    var a = +prompt('Введите число: ');
    var b = +prompt('Введите степень: ');
    alert(a + ' в степени ' + b + ' = ' + power(a, b));
}