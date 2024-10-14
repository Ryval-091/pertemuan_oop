"use strict";
class Hewan {
    constructor() {
        this.nama = '';
        this.kaki = 0;
    }
    bernafas() {
        console.log(`${this.nama} sedang bernafas, hewan ini mempunyai ${this.kaki} kaki`);
    }
}
const hewan1 = new Hewan();
console.log(hewan1);
hewan1.nama = "katak";
hewan1.kaki = 2;
console.log(hewan1);
hewan1.bernafas();
hewan1.nama = "gajah";
hewan1.kaki = 4;
console.log(hewan1);
hewan1.bernafas();
