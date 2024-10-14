"use strict";
class Hewan3 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
const hewan4 = new Hewan3("Gajah", 12);
console.log(hewan4);
hewan4.nama = "jerapah";
hewan4.kaki = 3;
console.log(hewan4);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Hewan23 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
const hewan21 = new Hewan23("kucing", 21);
console.log(hewan21);
