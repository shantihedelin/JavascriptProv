// 4. Shoppingcart med separata priser (3p)
// Skriv klart funktionen calculateTotalPrice2 som tar en array med produkter
// och ett objekt med priser som input och returnerar det totala priset

const modelPrices = {
  EOS_70D: 100,
  D3400: 120,
  Hero_4: 80,
  Phantom: 50,
  Karma: 200,
};

const shoppingCart = [
  { name: "Camera", brand: "Canon", model: "EOS_70D" },
  { name: "Camera", brand: "Nikon", model: "D3400" },
  { name: "Camera", brand: "GoPro", model: "Hero_4" },
  { name: "Drone", brand: "DJI", model: "Phantom" },
  { name: "Drone", brand: "GoPro", model: "Karma" },
];

function calculateTotalPrice2(shoppingCart, prices) {
  // Din kod här
  /*const totalprice = shoppingCart.model + 
}
*/

return modelArr.map((item) => {
  model: item.model,

})

// jag tänker att man får använda sig utav key här för att komma åt dom olika värdena. 
// ungefär som på convertUSC uppgiften. 

console.log(calculateTotalPrice2(shoppingCart, modelPrices)); // Ska logga 550
