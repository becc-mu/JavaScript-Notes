//Calculate the total price of your phone purchase

// You will keep purchasing phones (hint: loop!) until you run out of money in your bank account.
const PHONE_PRICE = 70.00;
const THRESHOLD = 100.00;
const ACCESSORIES = 9.99;
const TAX_RATE = 0.08;
var bank_balance = 300.00;
var amount = 0;


//You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold

function purchasePhone(amount) {
  return amount = amount - PHONE_PRICE

}

//After you've calculated your purchase amount, add in the tax,
 function returnTax(amount) {
   return amount * TAX_RATE;
   
 }
//then print out the calculated purchase amount, properly formatted.
 function formatAmount(amount){
  return "$" + amount.toFixed(2);
 }
//Finally, check the amount against your bank account balance to see if you can afford it or not. 

  


while(amount < bank_balance) {
  // purchase phones
   amount = amount + PHONE_PRICE;

   if(amount < THRESHOLD) {
     amount = amount + ACCESSORIES
   }


  amount = amount + returnTax(amount);
  console.log("Your purchase: " + formatAmount(amount));
  if (amount > bank_balance) {
    console.log("You have not enough fund :(" + bank_balance);
  }
}
// You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""

//You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places. 

//Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance,

