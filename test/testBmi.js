const expect = require("chai").expect;
const main = require("../main");
const data = require('../data');
const bmiData = require('../bmiData');


describe("This function calculates BMI", function() {
    describe("BMI Calculator", function() {
      it("calculates BMI for basic users", function() {
          const count = main(data, bmiData).overweightCount
          const d = [{ "Gender": "Male", "HeightCm": 171, "WeightKg": 96 }]
          const bmi=main(d, bmiData).result[0]['BMI']
        
  
          expect(count).to.equal(1);
          expect(bmi).to.equal(32.83)
      });
    });
  });