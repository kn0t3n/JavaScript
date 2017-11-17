function addition(zahl1, zahl2) {
    if (isNaN(zahl1) == true) {
        console.error(zahl1 + " ist keine Zahl!");
        return false;
    }
    if (isNaN(zahl2) == true) {
        console.error(zahl2 + " ist keine Zahl!");
        return false;
    }
    return zahl1 + zahl2;
}

let add = addition(2, 3);
let b = addition("hallo", 3);
console.log(add);
//console.log(b);

function additionBeliebig() {
    let add = 0;
    for (i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i]) == true) {
            console.error(zahl1 + " ist keine Zahl!");
            return false;
        } else {
            add += arguments[i];
        }
    }
    return add;
}


let c = additionBeliebig(10, 20, 30);
console.log(c);

function arraySumme(zahlen) {
    let add = 0;
    let str = '';
    for (i = 0; i < zahlen.length; i++) {
        if (isNaN(zahlen[i]) == true) {
            if (typeof (zahlen[i]) == 'string') {
                str += zahlen[i] + ' ';
            }
        } else {
            if (typeof (zahlen[i]) == 'number') {
                add += zahlen[i];
            }
        }
    }
    return add + ` ` + str;
}

var zahlenarray = ["Hallo", 10, 20, 40, 60, "Hallo", "blubb", true, undefined];
console.log(arraySumme(zahlenarray));

function fakultaetSchleife(n) {
    if (n < 0) {
        n = n * -1;
    }
    let erg = 1;
    for (i = 1; i <= n; i++) {
        erg *= i
    }
    return erg;
}

console.log(fakultaetSchleife(-5));

function fakultaetRekursiv(n) {
    if (n < 0) {
        n = n * -1;
    }
    if (n === 0) {
        return 1;
    }
    return n * fakultaetRekursiv(n - 1);
}

console.log(fakultaetRekursiv(-5));

function additionZweiParameter(x, y) {
    if (y === 0) {
        return x;
    }
    return 1 + additionZweiParameter(x, y - 1);
}

console.log(additionZweiParameter(8, 5));
//console.log(additionZweiParameter('hallo',5));


function zweierPotenz(n) {
    var erg = 1;
    for (i = 1; i <= n; i++) {
        erg *= 2;
    }
    return erg;
}

console.log(zweierPotenz(0));

function zweierPotenzRekursiv(n) {
    if (n === 0) {
        return 1;
    }
    return 2 * zweierPotenzRekursiv(n - 1);
}

console.log(zweierPotenzRekursiv(5));


function fibonacci(m) {
    if (m === 0) {
        return 1;
    }
    if (m === 1) {
        return 1;
    }
    return fibonacci(m - 1) + fibonacci(m - 2);
}

console.log(fibonacci(4));

function fibonacciSchleife(m) {
    let erg = 1;
    let vor = 1;
    let vorvor = 1;
    if (m === 0) {
        return 1;
    }
    if (m === 1) {
        return 1;
    }
    for (i = 2; i <= m; i++) {
        erg = vor + vorvor;
        vorvor = vor;
        vor = erg;
    }
    return erg;
}

console.log(fibonacciSchleife(4));