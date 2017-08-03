const PHONE_PRICE = 50.00;
const PHONE_ACCESORY_PRICE = 5.00;
const SPENDING_THRESHOLD = 300.00;
const TAX = 0.08;

var bankAccount = prompt();
var finalAmount = 0;
var finalAmountwithTaxes = 0;

while (finalAmount < bankAccount )
{
  finalAmount = finalAmount + PHONE_PRICE;

  if (finalAmount < SPENDING_THRESHOLD)
  {
      finalAmount += PHONE_ACCESORY_PRICE;
  }
}

function calculateTotal()
{
  var total = bankAccount - finalAmount;
  return total;
}

function calculateTotalWithTax()
{
  return finalAmountwithTaxes = (finalAmount + finalAmount*TAX);
}

function isItPossible()
{
  if (finalAmountwithTaxes > bankAccount)
  {
    console.log("Oh dear, you can't afford all those phones!");
  }

  else console.log("You can buy all those phones!");
}

console.log("Final purchasing amount: $" + finalAmount);
console.log("Including taxes: $" + calculateTotalWithTax());
isItPossible();
