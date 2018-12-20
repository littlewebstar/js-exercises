/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function commisionNumber(num) {
	number = (num/100) + num
	return number
}

function convertToUSD(num) {
	var usconvert = num * 1.4
	var usadd = commisionNumber(usconvert)
	return usadd.toFixed(2)

}
function convertToBRL(num) {
	var brconvert = num * 4.9
	var bradd = commisionNumber(brconvert)
	return bradd.toFixed(2)
}
/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);
