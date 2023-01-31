// 20. In the following shopping cart add, remove, edit iteams
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// - add 'Meat' in the beginning of your shopping cart if it has not been already added
const addBeginning = (iteam) => {
  if (!shoppingCart.includes(iteam)) shoppingCart.splice(0, 0, iteam);
  console.log(shoppingCart);
};

addBeginning("Meat");

// - add Sugar at the end of your shopping cart if it has not been already added
const addAtLast = (iteam) => {
  if (!shoppingCart.includes(iteam)) shoppingCart.push(iteam);
  console.log(shoppingCart);
};
addAtLast("Sugar");

// - remove 'Honey'
const removeIteam = (iteam) => {
  if (shoppingCart.includes(iteam))
    return shoppingCart.filter((elememt) => elememt !== iteam);
};

console.log(removeIteam('Honey'));

// - modify Tea to 'Green Tea'
const updateIteams = (iteam, updateIteam) => {
    return shoppingCart.splice(shoppingCart.indexOf(iteam), 1, updateIteam);
}
updateIteams('Tea', 'Green Tea')
console.log(shoppingCart);
