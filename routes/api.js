'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req,res)=>{
let number = 1

    let input = req.query.input
    
    let inputNum = convertHandler.getNum(input)
    let inputUnit = convertHandler.getUnit(input)


    if(convertHandler.checkInvalidUnit(inputUnit) && convertHandler.checkInvalidNum(inputNum)){
      console.log(inputUnit,inputNum,' Unit and Num at start of if')
      let returnNum = parseFloat(convertHandler.convert(eval(inputNum), inputUnit)).toFixed(5)
      let returnUnit = convertHandler.getReturnUnit(inputUnit)     
      let string = convertHandler.getString(eval(inputNum),inputUnit,Number.parseFloat(returnNum).toFixed(5), returnUnit)
      let returning = {
        initNum:eval(inputNum),
        initUnit:inputUnit,
        returnNum:Number.parseFloat(returnNum),
        returnUnit:returnUnit,
        string:string,
      }
      res.send(returning);
    }
    if(!convertHandler.checkInvalidUnit(inputUnit)){
      if(!convertHandler.checkInvalidNum(inputNum)){
        return res.send("invalid number and unit")
      }
      return res.send("invalid unit")
    }
    if(!convertHandler.checkInvalidNum(inputNum)){
      return res.send('invalid number')
    }
   
  })

};
