let x = 2;
console.log(this.x);
console.log('Servus');
var y = 4;
console.log(y);
console.log('TEST');
var z = 'hallo';
if (z) {
    console.log(z);
}

if (z == 'hallo') {
    console.log(z);

}

var arr = [10, 20, 30];
arr.push(200);
console.log(arr);
function test() {
    console.log('Function');
}
var fun = test;
fun();
test();
function add(first, second) {
    if (!isNaN(first) && !isNaN(second)) {
        let ausgabe = first + second;
        console.log(ausgabe)
    }
}
add('eins', 'zwei');
add(1, 2);

function beliebigVieleZahlen() {
    var result = 0;
    for (let index = 0; index < arguments.length; index++) {
        result += arguments[index];
    }
    return result;
}
console.log(beliebigVieleZahlen(10, 20, 30));
console.log(beliebigVieleZahlen(arr));

function arrayInput(array) {
    var zahl = 0;
    var zeichen = '';
    for (let index = 0; index < array.length; index++) {
        if (isNaN(array[index])) {
            zeichen += array[index];
        } else {
            zahl += array[index];
        }
    }
    return zahl + ' ' + zeichen;
}
arr.push('Hallo');
arr.push(22);
arr.push('_');
arr.push('Welt');
console.log(arrayInput(arr));

function fakultaetIterativ(n) {
    var z = 1;
    if (n === 0) {
        return 1;
    } else {
        for (var i = 1; i <= n; i++) {
            z *= i;
        }
    }
    return z;
}
console.log(fakultaetIterativ(5));

function fakultaet(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fakultaet(n - 1);
    }
}
console.log(fakultaet(5));

function additionRekursiv(a, b) {
    if (b === 0) {
        return a
    } else {
        return 1 + additionRekursiv(a, b - 1)
    }
}
console.log(additionRekursiv(3, 4));

function multi(a, b) {
    if (b === 1) {
        return a
    } else {
        return a + multi(a, b - 1);
    }
}
console.log(multi(3, 9));

function diff(a, b) {
    if (b === 0) {
        return a
    } else {
        return diff(a, b - 1) - 1;
    }
}
console.log(diff(88, 18));

function divide(a, b) {
    if (a - b <= 0) {
        return 1;
    }
    else {
        return divide(a - b, b) + 1;
    }
}
console.log(divide(2, 2));

function letTest() {
    let x = 42;
    var y = 12;
    if (true) {
        let x = 32;
        console.log(x);
        var y = 2;
        console.log(y);
    }
    console.log(x);
    console.log(y);
}
letTest();

function potenzIterativ(zahl) {
    var result = 1;
    for (let index = 0; index < zahl; index++) {
        result *= 2
    }
    return result;
}
console.log(potenzIterativ(4));

function potenzRekursiv(zahl) {
    if (zahl === 0) {
        return 1
    } else {
        return 2 * potenzRekursiv(zahl - 1);
    }
}
console.log(potenzRekursiv(4));