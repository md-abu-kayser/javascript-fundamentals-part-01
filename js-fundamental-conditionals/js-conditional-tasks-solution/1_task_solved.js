const burgerPrice = 550;

if (burgerPrice > 500) {
  console.log("Free Coke");
} else {
  console.log("Coke price: 30tk");
}

// Short (Ternary Version)
const burgerPrice2 = 550;

burgerPrice > 500 ? console.log("Free Coke") : console.log("Coke price: 30tk");
