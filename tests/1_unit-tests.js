const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("convertHandler should correctly read a whole number input.", function () {
    assert.equal(10, convertHandler.getNum("10kg"));
  });
  test("convertHandler should correctly read a decimal number input.", function () {
    assert.equal(10.1, convertHandler.getNum("10.1kg"));
  });
  test("convertHandler should correctly read a fractional input.", function () {
    assert.equal("1/2", convertHandler.getNum("1/2km"));
  });
  test("convertHandler should correctly read a fractional input with a decimal.", function () {
    assert.equal("5.4/3", convertHandler.getNum("5.4/3lbs"));
  });
  test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", function () {
    assert.isFalse(convertHandler.checkInvalidNum("3/2/3"));
  });
  test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", function () {
    assert.equal(1, convertHandler.getNum("kg"));
  });
  test("convertHandler should correctly read each valid input unit.", function () {
    assert.equal("kg", convertHandler.getUnit("kg"));
    assert.equal("kg", convertHandler.getUnit("KG"));
    assert.equal("lbs", convertHandler.getUnit("lbs"));
    assert.equal("lbs", convertHandler.getUnit("LBS"));
    assert.equal("gal", convertHandler.getUnit("gal"));
    assert.equal("gal", convertHandler.getUnit("GAL"));
    assert.equal("km", convertHandler.getUnit("km"));
    assert.equal("km", convertHandler.getUnit("KM"));
    assert.equal("mi", convertHandler.getUnit("mi"));
    assert.equal("mi", convertHandler.getUnit("MI"));
    assert.equal("L", convertHandler.getUnit("L"));
    assert.equal("L", convertHandler.getUnit("l"));
    assert.isUndefined(convertHandler.getUnit("anythingElse"));
  });
  test("convertHandler should correctly return an error for an invalid input unit.", function () {
    assert.isUndefined(convertHandler.getUnit("anythingElse"));
  });
  test("convertHandler should return the correct return unit for each valid input unit.", function () {
    assert.equal("kg", convertHandler.getUnit("kg"));
    assert.equal("kg", convertHandler.getUnit("KG"));
    assert.equal("lbs", convertHandler.getUnit("lbs"));
    assert.equal("lbs", convertHandler.getUnit("LBS"));
    assert.equal("gal", convertHandler.getUnit("gal"));
    assert.equal("gal", convertHandler.getUnit("GAL"));
    assert.equal("km", convertHandler.getUnit("km"));
    assert.equal("km", convertHandler.getUnit("KM"));
    assert.equal("mi", convertHandler.getUnit("mi"));
    assert.equal("mi", convertHandler.getUnit("MI"));
    assert.equal("L", convertHandler.getUnit("L"));
    assert.equal("L", convertHandler.getUnit("l"));
  });
  test("convertHandler should correctly return the spelled-out string unit for each valid input unit.", function () {
    assert.equal("kilograms", convertHandler.spellOutUnit("kg"));
    assert.equal("pounds", convertHandler.spellOutUnit("lbs"));
    assert.equal("gallons", convertHandler.spellOutUnit("gal"));
    assert.equal("kilometers", convertHandler.spellOutUnit("km"));
    assert.equal("miles", convertHandler.spellOutUnit("mi"));
    assert.equal("liters", convertHandler.spellOutUnit("L"));
  });
  test("convertHandler should correctly convert gal to L.", function () {
    assert.equal(
      "3.78541",
      convertHandler.convert(
        convertHandler.getNum("gal"),
        convertHandler.getUnit("gal")
      )
    );
  });
  test("convertHandler should correctly convert L to gal.", function () {
    assert.equal(
      "0.26417",
      convertHandler.convert(
        convertHandler.getNum("1L"),
        convertHandler.getUnit("1L")
      )
    );
  });

  test("convertHandler should correctly convert mi to km.", function () {
    assert.equal(
      "1.60934",
      convertHandler.convert(
        convertHandler.getNum("1mi"),
        convertHandler.getUnit("1mi")
      )
    );
  });
  test("convertHandler should correctly convert km to mi.", function () {
    assert.equal(
      "0.62137",
      convertHandler.convert(
        convertHandler.getNum("1km"),
        convertHandler.getUnit("1km")
      )
    );
  });
  test("convertHandler should correctly convert lbs to kg.", function () {
    assert.equal(
      "0.45359",
      convertHandler.convert(
        convertHandler.getNum("1lbs"),
        convertHandler.getUnit("1lbs")
      )
    );
  });
  test("convertHandler should correctly convert kg to lbs.", function () {
    assert.equal(
      "2.20462",
      convertHandler.convert(
        convertHandler.getNum("1kg"),
        convertHandler.getUnit("1kg")
      )
    );
  });
});
