var numOne = 1
var numTwo = 5
var numThree = 3
var numFour = 7

function sumayMultiplica(numOne, numTwo, numThree, numFour) {
  var resultado = (numOne + numTwo) * (numThree + numFour)
  if (resultado > 50) {
    console.log("¡El número es mayor que 50!")
  } else if (resultado === 50) {
    console.log("¡El número 50!")
  } else {
    console.log("¡El número es menor que 50!")
  }
}

sumayMultiplica(numOne, numTwo, numThree, numFour)