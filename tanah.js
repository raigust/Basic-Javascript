class Tanah {
    constructor(panjang, lebar, hargaPerMeter, persentasePPN) {
        this.panjang = panjang;
        this.lebar = lebar;
        this.hargaPerMeter = hargaPerMeter;
        this.persentasePPN = persentasePPN;
    }
    hitungLuas() {
        return this.panjang * this.lebar;
    }
    hitungHargaSebelumPPN() {
        return this.hitungLuas() * this.hargaPerMeter;
    }
    hitungPPN() {
        return this.hitungHargaSebelumPPN() * (this.persentasePPN / 100);
    }
    hitungTotalHarga() {
        return this.hitungHargaSebelumPPN() + this.hitungPPN();
    }
}

    let panjangTanah = 20.5; 
    let lebarTanah = 30;    
    let hargaPerMeter = 1500000; 
    let persentasePPN = 15;


    let tanah = new Tanah(panjangTanah, lebarTanah, hargaPerMeter, persentasePPN);

    let totalHarga = tanah.hitungTotalHarga();

    console.log("Total harga yang harus dibayarkan adalah: Rp",totalHarga);