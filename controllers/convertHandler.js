function ConvertHandler() {


  this.checkInvalidNum = function(inputNum){
    if(inputNum){
      if(inputNum.length>2){
        const regexp = /[\/]/g;
      const inputInvalidNumArr = inputNum.match(regexp);
      if(inputInvalidNumArr){
        if(inputInvalidNumArr.length>1){
          return false
        }
      }
    }
    return true
  }
    return false;
  }

  this.checkInvalidUnit = function(inputUnit){
    console.log(inputUnit,'inputUnit')
    if(inputUnit){
      return true
    }
   else return false
  }

  this.getNum = function (input) {
    const regexp = /[\d.\/]/g;
    const inputNumArr = input.match(regexp);
    if(inputNumArr){
      const inputNum = inputNumArr.reduce((accumulator, value) => {
        return accumulator + value;
      });
        return inputNum;
    }
    
    else return 1
  };

  this.getUnit = function (input) {
    const regexp = /[A-Z]/gi;
    const inputUnitArr = input.match(regexp);
    console.log(inputUnitArr,'<regexed original>', input )
    let inputUnit ;
    if(inputUnitArr){
        inputUnit = inputUnitArr.reduce((accumulator, value) => {
        return accumulator + value;
      });
    }

    let allUnits = ["mi", "km", "gal", "L", "lbs", "kg"];
    if(inputUnit === 'l') return inputUnit.toUpperCase();else
    if(inputUnit){
      if(allUnits.includes(inputUnit.toLowerCase()) || allUnits.includes(inputUnit.toUpperCase())){ 
        if(inputUnit === 'l' || inputUnit === "L") return inputUnit.toUpperCase()
        ;else return inputUnit.toLowerCase();
      }
      if(allUnits.includes(inputUnit))return inputUnit
    }
    else return false 
  };

  this.getReturnUnit = function (initUnit) {
    if(initUnit){

      let allUnits = ["mi", "km", "gal", "L", "lbs", "kg"];
      let result;
    allUnits.map((v, i, arr) => {
      if (initUnit === v || initUnit.toLowerCase() === v) {
        if (i % 2 === 0) {
          return (result = arr[i + 1]);
        } else return (result = arr[i - 1]);
      }
    });
    
    return result;
  }
  else return false;
  };

  this.spellOutUnit = function (unit) {
    let result;
    let allUnits = ["mi", "km", "gal", "L", "lbs", "kg"];
    let allUnitsSpelled = ["miles", "kilometers", "gallons", "liters", "pounds", "kilograms"];
    allUnits.map((v,i,arr)=>{
      if(unit === arr[i]){
        result = allUnitsSpelled[i]
      }
      return
    })
    return result;
  };

  this.convert = function (initNum, initUnit) {
    let result;
    console.log('init num',initNum, 'initUnit', initUnit);


    
      if (initUnit === "gal") {
        const galToL = 3.78541;
        result = initNum * galToL;
        result = result.toFixed(5)
      }
      if (initUnit === "L") {
        const LtoGal = 0.264172;
        result = initNum * LtoGal;
        result = result.toFixed(5)
      }
    
      if (initUnit === "lbs") {
        const lbsToKg = 0.453592;
        result = initNum * lbsToKg;
        result = result.toFixed(5)
      }
      if (initUnit === "kg") {
        const kgToLbs = 2.204624;
        result = initNum * kgToLbs;
        result = result.toFixed(5)
      }
      if (initUnit === "mi") {
        const miToKm = 1.609340;
        result = initNum * miToKm;
        result = result.toFixed(6)
      }
      if (initUnit === "km") {
        const kmToMi = 0.621373;
        result = initNum * kmToMi;
        result = result.toFixed(5)
      }
    if(result){
      console.log('result:', result);
      return +result;
    }
    return false
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
console.log(returnNum,'stirng result from convertion', typeof +returnNum, +returnNum)



    
    if(initUnit && returnUnit){   
        let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
        //lacking the spellOutUnit and the error phrase
        return result;
      }

   
  };
}

module.exports = ConvertHandler;
