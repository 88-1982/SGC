# Super Galactic Age Calculator

#### SGC

#### By DeAunte Hall



## Technologies Used 

* _Babel/core 7.6.4_
* _Babel/plugin-transform-modules-commonjs 7.6.0_
* _Bootstrap 4.5.0_
* _clean-webpack-plugin 3.0.0_
* _CSS_
* _css-loader 3.2.0_
* _eslint 6.3.0_
* _eslint-loader 3.0.0_
* _file-loader 1.1.6_
* _gh-pages 3.1.0_
* _HTML5_
* _html-loader 0.5.5_
* _html-webpack-plugin 3.2.0_
* _JavaScript ES6_
* _Jest 24.9.0_
* _jQuery 3.5.1_
* _Node Package Manager 6.14.9_
* _popper.js 1.16.1_
* _style-loader 1.0.0_
* _webpack 4.39.3_
* _webpack-cli 3.3.8_
* _webpack-dev-server 3.11.2_

## Description
 A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user's age based on a planet's solar years.

You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Make sure to commit a test before writing the corresponding method. This way, you'll be following the Red, Green, Refactor workflow. Remember that typically we'll only want one expectation per test.

The business logic of your application should:

Take a person's age in years and create a class that does the following:

Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
Returns their age in Venus years. (A Venus year is .62 Earth years.)
Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.




## Specifications

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
    expect(calc.planetYears).toEqual(9.12);
  });

test('should correctly return this.age * 0.62', () => {
    calc.venusYears();
    expect(calc.planetYears).toEqual(23.56);
  });

test('should correctly return this.age * 1.88', () => {
    calc.marsYears();
    expect(calc.planetYears).toEqual(71.44);
  });

test('should correctly return this.age * 11.86', () => {
    calc.jupiterYears();
    expect(calc.planetYears).toEqual(9914.2);
  });

})


## Setup/Installation Requirements
* _Open the terminal on your local machine_
* _If [Node.js](https://nodejs.org/en/) and [Nope Package Manager (npm)](https://www.npmjs.com/) are not installed on your local device, follow the instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone https://github.com/88-1982/SGC.git`
* _Navigate to the top level of the repository with the command `$ cd SGC`_
* _Recreate project environment and install required dependencies with terminal command `$ npm install`_
* _Create production environment with terminal command `$ npm run build`_
* _Open project in a development server in the browser of your choice with the command `$ npm run start`_
* _Lint code with the command `$ npm run lint`_
* _Run tests in Jest with the command `$ npm test`_


## Known Bugs

No known bugs.

## License
	MIT
Copyright (c) 2021 DeAunte Hall

## Contact Information
	http://www.88-1982@github.com
	godsofolympus88@gmail.com	


