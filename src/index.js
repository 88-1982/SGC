import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {SuperGalacticAgeCalculator} from './js/SGC.js';

let calc;
$("#galactic-age").submit(function(event) {
  event.preventDefault();
  calc = new SuperGalacticAgeCalculator($('#age').val());
});
$("#earth-life-expectancy").on("click", function() {
  calc.lifeExpectancy();
  $('.earth-expectancy').text(calc.planetExpectancy);
});
$("#mercury-years").on("click", function() {
  calc.mercuryYears();
  $('.mercury-years').text(calc.planetYears);
});
$("#mercury-life-expectancy").on("click", function() {
  calc.mercuryLifeExpectancy();
  $('.mercury-expectancy').text(calc.planetExpectancy);
});
$("#venus-years").on("click", function() {
  calc.venusYears();
  $('.venus-years').text(calc.planetYears);
});
$("#venus-life-expectancy").on("click", function() {
  calc.venusLifeExpectancy();
  $('.venus-expectancy').text(calc.planetExpectancy);
});
$("#mars-years").on("click", function() {
  calc.marsYears();
  $('.mars-years').text(calc.planetYears);
});
$("#mars-life-expectancy").on("click", function() {
  calc.marsLifeExpectancy();
  $('.mars-expectancy').text(calc.planetExpectancy);
});
$("#jupiter-years").on("click", function() {
  calc.jupiterYears();
  $('.jupiter-years').text(calc.planetYears);
});
$("#jupiter-life-expectancy").on("click", function() {
  calc.jupiterLifeExpectancy();
  $('.jupiter-expectancy').text(calc.planetExpectancy);
});
