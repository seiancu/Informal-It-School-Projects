// Product class
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Get price method
Product.prototype.getPrice = function () {
  return this.price;
};

// Cart class
function Cart() {
  this.products = [];
}

// Add product method
Cart.prototype.addProduct = function (product) {
  this.products.push(product);
};

// Remove product method
Cart.prototype.removeProduct = function (product) {
  var index = this.products.indexOf(product);
  if (index !== -1) {
    this.products.splice(index, 1);
  }
};

// Get total price method
Cart.prototype.getTotalPrice = function () {
  var totalPrice = 0;
  for (var i = 0; i < this.products.length; i++) {
    totalPrice += this.products[i].getPrice();
  }
  return totalPrice;
};

// Discounted product subclass that extends the Product class
function DiscountedProduct(name, price, discount) {
  Product.call(this, name, price);
  this.discount = discount;
}

DiscountedProduct.prototype = Object.create(Product.prototype);
DiscountedProduct.prototype.constructor = DiscountedProduct;

DiscountedProduct.prototype.getPrice = function () {
  var discountedPrice = this.price - this.price * (this.discount * 0.01);
  return discountedPrice;
};

// Creating and displaying new products
var productOne = new Product("iPhone 15 Pro", 1500);
console.log(`Product: ${productOne.name} has been added to the Cart.`);

var productTwo = new Product("Samsung S24", 1300);
console.log(`Product: ${productTwo.name} has been added to the Cart.`);

var productThree = new Product("Huawei Pro 10", 800);
console.log(`Product: ${productThree.name} has been added to the Cart.`);

// Create an instance of Cart class
var cart = new Cart();

// Adding products to the Cart
cart.addProduct(productOne);
cart.addProduct(productTwo);
cart.addProduct(productThree);

// Displaying products in the Cart
console.log(`Your Cart has the following products:
${productOne.name} x $${productOne.price}
${productTwo.name} x $${productTwo.price}
${productThree.name} x $${productThree.price}`);

// Removing a product from the Cart
cart.removeProduct(productThree);
console.log(`Product: ${productThree.name} has been removed form the Cart`);

// Displaying the updated Cart
console.log(`Now your cart has the following products:
${productOne.name} x $${productOne.price}
${productTwo.name} x $${productTwo.price}`);

// Displaying the Total Cart Value
console.log(`Your Cart has the following Total: $${cart.getTotalPrice()}`);

// Creating a discounted product
var discountedProductOne = new DiscountedProduct("iPhone 14", 1300, 30);
console.log(
  `This product: ${discountedProductOne.name} has a discount of: %${discountedProductOne.discount}`
);

// Updating the discounted price
discountedProductOne.getPrice(discountedProductOne);
console.log(
  `The selling price for ${
    discountedProductOne.name
  } is now $${discountedProductOne.getPrice(discountedProductOne)}`
);

// Adding the discounted product to the Cart
cart.addProduct(discountedProductOne);
console.log(
  `Product: ${discountedProductOne.name} has been added to the Cart.`
);

// Displaying the Total Cart Value
console.log(`Now your Cart has the following products:
${productOne.name} x $${productOne.price}
${productTwo.name} x $${productTwo.price}
${discountedProductOne.name} x $${discountedProductOne.getPrice(
  discountedProductOne
)}

Your Total Cart value is: $${cart.getTotalPrice()}`);
