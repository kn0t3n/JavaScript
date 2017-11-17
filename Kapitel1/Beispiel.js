var zahl = 42;
console.log(zahl);
console.log(typeof zahl);
zahl = 'hallo';
console.log(zahl);
console.log(typeof zahl);

// Objekte in JavaScript

// Literal-Schreibweise: Singleton: Objekt existiert nur einmal
var person = {

};
person.vorname = 'Andreas';
person.nachname = 'Maier';
console.log(typeof person);
console.log(person.vorname);
console.log(person.nachname);

var person2 = {
    vorname: 'Philipp',
    nachname: 'Schweiger',
    sprechen: function(){
        console.log('Hallo');
    }
};

person2.sprechen();
console.log(person2['nachname']);

// Löschen von Eigenschaften
delete person2.vorname;
console.log(person2.vorname);

// Globale Variablen
// So nicht machen
name = 'Blubb';

// immer mit var
var name = 'Blubb';

// besser mit let
// ECMAScript 6:
let num = 42;
const LOG_LEVEL_DEBUG = 'debug';
console.log(LOG_LEVEL_DEBUG);
LOG_LEVEL_DEBUG = 'info';
console.log(LOG_LEVEL_DEBUG);