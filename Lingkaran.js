class Lingkaran {
    constructor(jari_jari) {
        this.jari_jari = jari_jari;
    }

    luas() {
        return Math.PI * Math.pow(this.jari_jari, 2);
    }

    keliling() {
        return 2 * Math.PI * this.jari_jari;
    }
}
class Tabung extends Lingkaran {
    constructor(jari_jari, tinggi) {
        super(jari_jari);
        this.tinggi = tinggi;
    }

    volume() {
        return this.luas() * this.tinggi;
    }

    luasPermukaan() {
        return 2 * this.luas() + this.keliling() * this.tinggi;
    }

    luasSelimut() {
        return this.keliling() * this.tinggi;
    }
}
class Kerucut extends Lingkaran {
    constructor(jari_jari, tinggi) {
        super(jari_jari);
        this.tinggi = tinggi;
    }

    volume() {
        return (1/3) * this.luas() * this.tinggi;
    }

    luasPermukaan() {
        let s = Math.sqrt(Math.pow(this.jari_jari, 2) + Math.pow(this.tinggi, 2));
        return this.luas() + Math.PI * this.jari_jari * s;
    }

    luasSelimut() {
        let s = Math.sqrt(Math.pow(this.jari_jari, 2) + Math.pow(this.tinggi, 2));
        return Math.PI * this.jari_jari * s;
    }
}
class Bola extends Lingkaran {
    constructor(jari_jari) {
        super(jari_jari);
    }

    volume() {
        return (4/3) * Math.PI * Math.pow(this.jari_jari, 3);
    }

    luasPermukaan() {
        return 4 * this.luas();
    }
}
        let bola = new Bola(30);
    console.log("Volume Bola: ",bola.volume().toFixed(2) +"cm^3");
    console.log(`Luas Permukaan Bola: ${bola.luasPermukaan().toFixed(2)} +"cm^2`);

        let kerucut = new Kerucut(20, 40);
    console.log(`Volume Kerucut: ${kerucut.volume().toFixed(2)} cm^3`);
    console.log(`Luas Permukaan Kerucut: ${kerucut.luasPermukaan().toFixed(2)} cm^2`);
    console.log(`Luas Selimut Kerucut: ${kerucut.luasSelimut().toFixed(2)} cm^2`);


        let tabung = new Tabung(15, 50);
    console.log(`Volume Tabung: ${tabung.volume().toFixed(2)} cm^3`);
    console.log(`Luas Permukaan Tabung: ${tabung.luasPermukaan().toFixed(2)} cm^2`);
    console.log(`Luas Selimut Tabung: ${tabung.luasSelimut().toFixed(2)} cm^2`);
