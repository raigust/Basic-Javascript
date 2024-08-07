let sembako =[
    {nama : "Beras", harga: 10000, jumlah: 5},
    {nama : "Gula", harga: 14000, jumlah: 5},
    {nama : "Telur", harga: 20000, jumlah: 2},
    {nama : "Miinyak Goreng", harga: 9000, jumlah: 10},
];
function hitung() {
    const Beras = sembako[0].harga * sembako[0].jumlah
    const Gula = sembako[1].harga * sembako[1].jumlah
    const Telur = sembako[2].harga * sembako[2].jumlah
    const Minyak = sembako[3].harga * sembako[3].jumlah
    return Beras + Gula + Telur + Minyak
}
console.log("Total dari harga beras : " + hitung())
