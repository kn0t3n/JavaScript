let woerter = [];
woerter.push('Hans');
woerter.push('im');
woerter.push('Glueck');
woerter.push('MC Donalds');
woerter.push('Sausalitos');
console.log(woerter);

woerter.forEach(function (wort, position) {
    console.log(position + ": " + wort);
})

let zahlen = [1, 45, 10, 21, 6];
zahlen.forEach(function (zahl) {
    console.log(zahl);
})
zahlen.sort();
console.log(zahlen);

zahlen.sort(function (a, b) {
    return a - b;
})
console.log(zahlen);

zahlen.sort(function (a, b) {
    return b - a;
})
console.log(zahlen);

function aufsteigendSortieren(a, b) {
    return a - b;
}

zahlen.sort(aufsteigendSortieren);
console.log(zahlen);

let numbers = [1, 2, 6, 8, 10];
let wurzel = numbers.map(Math.sqrt);
console.log(wurzel);
let doppelte = numbers.map(function (zahl) {
    return zahl * 2;
});
console.log(doppelte);

let quadrat = numbers.map(Math.pow);
console.log(quadrat);

let vierfache = numbers.map(function (number) {
    return number * 4;
})
console.log(vierfache);

let werte = [27, 12, 15, 32, 100, 13, 7, 50, 100, 32, 48, 11];

//Alle Primzahlen aus dem Werte-Array filtern


let primzahlen = werte.filter(function (zahl) {
    for (var teiler = 2; teiler < zahl; teiler++) {
        if (zahl % teiler == 0) {
            return false;
        }
    }
    return true;
});
console.log(primzahlen);