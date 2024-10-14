class Hewan46 {
    nama! : string;
    kaki! : number;

    constructor(nama: string, kaki : number){
        this.nama = nama;
        this.kaki = kaki;
    }
}

class Hewan64 extends Hewan46 {
    warna! : string;

    constructor(nama: string,kaki: number,warna: string){
        super(nama, kaki);
        this.warna = warna;
    }
}

const hewan01 = new Hewan64("tikus",10,"merah")
console.log(hewan01)

const hewan02 = new Hewan46("tikus",10)
console.log(hewan02)