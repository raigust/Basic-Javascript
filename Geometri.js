let sukuPertama = 4;
let rasio = 3;
let jumlahSuku = 10;

let jumlahDeret = 0;

for (let i = 0; i < jumlahSuku; i++) {
    let sukuSaatIni = sukuPertama * Math.pow(rasio, i);
    jumlahDeret += sukuSaatIni;
}

console.log("Jumlah 10 suku pertama dari deret geometri tersebut adalah: ", jumlahDeret);