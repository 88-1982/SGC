import SGC from  '../src/js/SGC.js';

escribe('SuperGalacticAgeCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new SuperGalacticAgeCalculator(22);
  });

test('should correctly create an instance of SuperGalacticAgeCalculator', () => {    
    expect(calc.age).toEqual(22);
  });

test('should correctly return this.age * 0.24', () => {
    calc.mercuryYears();
    expect(calc.planetYears).toEqual(5.3);
  });

test('should correctly return this.age * 0.62', () => {
    calc.venusYears();
    expect(calc.planetYears).toEqual(13.6);
  });

test('should correctly return this.age * 1.88', () => {
    calc.marsYears();
    expect(calc.planetYears).toEqual(41.4);
  });

test('should correctly return this.age * 11.86', () => {
    calc.jupiterYears();
    expect(calc.planetYears).toEqual(260.9);
  });

test('should correctly return life expectancy for this.age in Earth years', () => {
    calc.lifeExpectancy();
    expect(calc.planetExpectancy).toEqual("your estimated life expectancy is 56.8 Earth years.");
  });

test('should correctly return life expectancy for this.age in Mercury years', () => {
    calc.mercuryLifeExpectancy();
    expect(calc.planetExpectancy).toEqual("your estimated life expectancy is 13.6 Mercury years.");
  });

test('should correctly return life expectancy for this.age in Venus years', () => {
    calc.venusLifeExpectancy();
    expect(calc.planetExpectancy).toEqual("your estimated life expectancy is 35.3 Venus years.");
  });

test('should correctly return life expectancy for this.age in Mars years', () => {
    calc.marsLifeExpectancy();
    expect(calc.planetExpectancy).toEqual("your estimated life expectancy is 106.7 Mars years.");
  });

test('should correctly return life expectancy for this.age in Jupiter years', () => {
    calc.jupiterLifeExpectancy();
    expect(calc.planetExpectancy).toEqual("your estimated life expectancy is 673.7 Jupiter years.");
  });

test('should correctly return years lived beyond Earth life expectancy', () => {
    calc = new SuperGalacticAgeCalculator(80);
    calc.lifeExpectancy();
    expect(calc.planetExpectancy).toEqual("Wow, you have lived 1.2 Earth years longer than the average life expectancy!");
  });

test('should correctly return Mercury years lived beyond Mercury life expectancy', () => {
    calc = new SuperGalacticAgeCalculator(80);
    calc.mercuryLifeExpectancy();
    expect(calc.planetExpectancy).toEqual("Wow, you have lived 0.3 Mercury years longer than the average Mercury life expectancy!");
  });

test('should correctly return Venus years lived beyond Venus life expectancy', () => {
    calc = new SuperGalacticAgeCalculator(80);
    calc.venusLifeExpectancy();
    expect(calc.planetExpectancy).toEqual("Wow, you have lived 0.7 Venus years longer than the average Venus life expectancy!");
  });

test('should correctly return Mars years lived beyond Mars life expectancy', () => {
    calc = new SuperGalacticAgeCalculator(80);
    calc.marsLifeExpectancy();
    expect(calc.planetExpectancy).toEqual("Wow, you have lived 2.3 Mars years longer than the average Mars life expectancy!");
  });

test('should correctly return Jupiter years lived beyond Jupiter life expectancy', () => {
    calc = new SuperGalacticAgeCalculator(80);
    calc.jupiterLifeExpectancy();
    expect(calc.planetExpectancy).toEqual("Wow, you have lived 14.2 Jupiter years longer than the average Jupiter life expectancy!");
  });
});