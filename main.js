const data = require('./data');
const bmiData = require('./bmiData');
const BMI = require('./bmi');

module.exports=function main(data,bmiData) {
    result=[]
    for (i of data) {
        const height = Number((i['HeightCm'] * 0.01).toFixed(2))
        const weight = i['WeightKg']
        const bmi = new BMI(weight, height)
        const range=bmi.bmiRange()
        i['BMI'] = bmi.bmi;
        i['BMI Category'] = bmiData[range][0]
        i['Health Risk'] = bmiData[range][1]
        result.push(i)
        
    }
    console.log('The BMI , BMI Category and Health Risks are added to the Data:::', JSON.stringify(result))
    const count = result.filter(e => e['BMI Category'] == 'Overweight').length
    console.log('The count of overweight people are: ', count)
    return {
        result: result,
        overweightCount:count
    }
}




