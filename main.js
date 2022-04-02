console.log("hello");
var count = 1; // TODO: initialize with 0 until items have been added; for now, hardcoded with 1

// Counter for items
var counterDisplayElem = document.getElementById('counter-display');
var counterMinusElem = document.getElementById('counter-minus');
var counterPlusElem = document.getElementById('counter-plus');
// Cart item amount
var addToCartElem = document.getElementById('addToCart');
var cartCounter = document.getElementById('cart-count');
// Cart items
const cart = [];
// Prices
var cookieTotal = document.getElementById('cookie-total');
var cartTotal = document.getElementById('total')

function addCount() {
  count++;
  counterDisplayElem.innerHTML = count;
}

function subtractCount() {
  count--;
  counterDisplayElem.innerHTML = count;
}

function updateCartCount() {
  cartCounter.innerHTML = cart.length;
}
function updateTotal() { //TODO
  newTotal = 0;
  // for (let item in MyCart.items) {
  //   newTotal += item.count * item.cost;
  // }
  // MyCart.total = newTotal;
  // cartTotal = MyCart.total
}
function addToCart() {
  newCookie = ChocoCookie(count, "day"); //need to add for frequency
  cart.push(newCookie);
  console.log("len", cart.length)
  updateCartCount();
}

function ChocoCookie(count, frequency) {
  this.name = "chocolate-chip";
  this.count = count;
  this.frequency = frequency;
  this.cost = 1;
  this.image = "img/cookie.png";
  this.image_alt = "chocolate chip cookie";
}

function GingerbreadCookie(name, count, frequency, cost) {
  this.name = "gingerbread";
  this.count = count;
  this.frequency = frequency;
  this.cost = 2;
  this.image = "img/gingerbread.png";
  this.image_alt = "gingerbread cookie";
}

function Biscuit(name, count, frequency, cost) {
  this.name = "biscuit";
  this.count = count;
  this.frequency = frequency;
  this.cost = 1;
  this.image = "img/biscuit.png";
  this.image_alt = "biscuit cookie";
}


// function MyCart(items, count, total) {
//   this.items = items; //list of Cookie/Cake instances in shopping cart
//   this.count = length(items);
//   this.total = total;
// }

function remove() {
  var element = document.getElementById("cookie-1"); // TODO: remove current item, currently hard coded to delet cookie-1
  element.remove();
}


counterPlusElem.addEventListener("click", addCount);
counterMinusElem.addEventListener("click", subtractCount);

addToCartElem.addEventListener("click", addToCart);



