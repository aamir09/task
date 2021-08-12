
class BMI{
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
        this.bmi=Number((this.weight/(this.height*this.height)).toFixed(2));
    }
    bmiRange() {
        if (this.bmi <= 18.4) return '1'
        else if(this.bmi>18.4 && this.bmi<=24.9) return '2'
        else if(this.bmi>=25 && this.bmi<=29.9) return '3'
        else if(this.bmi>=30 && this.bmi<=34.9) return '4'
        else if (this.bmi >= 35 && this.bmi <= 39.9) return '5'
        else return '6'
    }
}

module.exports = BMI;