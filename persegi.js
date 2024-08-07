class persegi{
    constructor(sisi){
        this.sisi = sisi 
    }
    luas = () => {
        return this.sisi *  this.sisi
    }
    keliling = () => {
        return 4 * this.sisi
    }
}
let kotak = new persegi(5)
console.log("Luas Kotak adalah " + kotak.luas())
console.log("Keliling Kotak adalah " + kotak.keliling())

class kubus extends persegi {
    //Keliling = 6 x sisi
    //Lp = 4 x 
}