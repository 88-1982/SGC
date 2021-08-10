import {SuperGalacticAgeCalculator} from  '../src/js/SGC.js';

describe('SuperGalacticAgeCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new SuperGalacticAgeCalculator(38);
  });

test('should correctly create an instance of SuperGalacticAgeCalculator', () => {    
    expect(calc.age).toEqual(38);
  });

test('should correctly return this.age * 0.24', () => {
    calc.mercuryYears();
    expect(calc.planetYears).toEqual(9.1);
  });

test('should correctly return this.age * 0.62', () => {
    calc.venusYears();
    expect(calc.planetYears).toEqual(23.6);
  });

test('should correctly return this.age * 1.88', () => {
    calc.marsYears();
    expect(calc.planetYears).toEqual(71.4);
  });

test('should correctly return this.age * 11.86', () => {
    calc.jupiterYears();
    expect(calc.planetYears).toEqual(450.7);
  });
  test('should correctly return life expectancy for this.age in Earth years', () => {
    calc.lifeExpectancy();
    expect(calc.planetExpectancy).toEqual("your estimated life expectancy is 40.9 Earth years.");
});
test('should correctly return life expectancy for this.age in Venus years', () => {
  calc.venusLifeExpectancy();
  expect(calc.planetExpectancy).toEqual("your estimated life expectancy is 0 Venus years.");
});
test('should correctly return life expectancy for this.age in Mars years', () => {
  calc.marsLifeExpectancy();
  expect(calc.planetExpectancy).toEqual("your estimated life expectancy is 0 Mars years.");
});
});
