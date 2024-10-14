"use strict";
class Hewan46 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
class Hewan64 extends Hewan46 {
    constructor(nama, kaki, warna) {
        super(nama, kaki);
        this.warna = warna;
    }
}
const hewan01 = new Hewan64("tikus", 10, "merah");
console.log(hewan01);
const hewan02 = new Hewan46("tikus", 10);
console.log(hewan02);
