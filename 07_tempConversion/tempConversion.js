const convertToCelsius = function(temperature) {
  // Farenheit to Celsius formula -> celsius = (fahrenheit - 32) * 5/9
  let celsius = (temperature - 32) * (5/9);

  return parseFloat(celsius.toFixed(1));

};

const convertToFahrenheit = function(temperature) {
  // Celsius to Fahrenheit formula -> fahrenheit = (celsius * 9/5) + 32
  let fahrenheit = (temperature * (9/5)) + 32;

  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
