export class SuperGalacticAgeCalculator {
  constructor(age){
    this.age = age;
    this.planetYears;
    this.planetExpectancy;
  }
  mercuryYears(){
    this.planetYears = parseFloat((this.age * 0.24).toFixed(1));
  }

  venusYears(){
    this.planetYears = parseFloat((this.age * 0.62).toFixed(1));
  }

  marsYears() {
    this.planetYears = parseFloat((this.age * 1.88).toFixed(1));
  }

  jupiterYears() {
    this.planetYears = parseFloat((this.age * 11.86).toFixed(1));
  }

  lifeExpectancy(){
    let num = parseFloat((78.9 - this.age).toFixed(1));
    this.planetExpectancy = `your estimated life expectancy is ${num} Earth years.`;
    if (num < 0) {
      num = Math.abs(num);
      this.planetExpectancy = `Wow, you have lived ${num} Earth years longer than the average life expectancy!`;
    }
  }

  mercuryLifeExpectancy(){
    this.mercuryYears();
    let num = parseFloat((9.12 - this.planetYears).toFixed(1));
    this.planetExpectancy = `your estimated life expectancy is ${num} Mercury years.`;
    if (num < 0) {
      num = Math.abs(num);
      this.planetExpectancy = `Wow, you have lived ${num} Mercury years longer than the average Mercury life expectancy!`;
    }
  }
    
  venusLifeExpectancy(){
    this.venusYears();
    let num = parseFloat((23.56 - this.planetYears).toFixed(1));
    this.planetExpectancy = `your estimated life expectancy is ${num} Venus years.`;
    if (num < 0) {
      num = Math.abs(num);
      this.planetExpectancy = `Wow, you have lived ${num} Venus years longer than the average Venus life expectancy!`;
    }
  }

  marsLifeExpectancy(){
    this.marsYears();
    let num = parseFloat((71.4 - this.planetYears).toFixed(1));
    this.planetExpectancy = `your estimated life expectancy is ${num} Mars years.`;
    if (num < 0) {
      num = Math.abs(num);
      this.planetExpectancy = `Wow, you have lived ${num} Mars years longer than the average Mars life expectancy!`;
    }
  }

  jupiterLifeExpectancy(){
    this.jupiterYears();
    let num = parseFloat((450.7 - this.planetYears).toFixed(1));
    this.planetExpectancy = `your estimated life expectancy is ${num} Jupiter years.`;
    if (num < 0) {
      num = Math.abs(num);
      this.planetExpectancy = `Wow, you have lived ${num} Jupiter years longer than the average Jupiter life expectancy!`;
    }
  }
}
