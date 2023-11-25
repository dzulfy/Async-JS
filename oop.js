class Kendaraan {
    constructor(jenis){
        this.jenis = jenis;
    }

    bergerak () {
        return 'Kendaraan ini bergerak';
    }
}
class Mobil extends Kendaraan {
    constructor(merk, model, tahun) {
        super('Mobil')
        this.merk = merk;
        this.model = model;
        this.tahun = tahun;
    }
    tampilkanDetail() {
        return `Mobil dengan merk: ${this.merk}, Model; ${this.model}, Tahun: ${this.tahun}`
     }

    bergerak(){
        return`${this.jenis} melaju kencang`
    }
 }

const mobilku = new Mobil('Daihatsu', 'Xenia', 2009);
console.log(mobilku.tampilkanDetail())
console.log(mobilku.bergerak())

const keliilng = 2;