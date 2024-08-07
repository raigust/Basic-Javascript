class BMI {
    constructor(tinggi, berat) {
        this.tinggi = tinggi / 100; 
        this.berat = berat;
    }
    hitungBMI() {
        return this.berat / (this.tinggi * this.tinggi);
    }
    StatusBeratBadan() {
        let bmi = this.hitungBMI();
        if (bmi < 18.5) {
            return 'Kekurangan berat badan';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal(ideal)';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Kelebihan berat badan';
        } else {
            return 'Kegemukan(Obesitas)';
        }
    }
}
        let tinggiRhodey = 170; 
        let beratRhodey = 90;   

        let bmiRhodey = new BMI(tinggiRhodey, beratRhodey);

        let nilaiBMI = bmiRhodey.hitungBMI();
        let statusBMI = bmiRhodey.StatusBeratBadan();


    console.log("Nilai BMI Rhodey adalah: ", nilaiBMI.toFixed);
    console.log("Status kondisi tubuh Rhodey adalah: ", statusBMI);