var Explosion = (function (explosion) {
  var categories;
  var types;
  var products;
  explosion.loadItems = function(){
    Promise.all([
      $.getJSON('categories.json'),
      $.getJSON('types.json'),
      $.getJSON('products.json')
      ])
    .then(function(res){
        categories = res[0].categories;
        types = res[1].types
        products = res[2].products
        explosion.pickCategory(categories, types, products)
      })
  }

  return explosion
})(Explosion || {})
Explosion.loadItems()

  // explosion.loadItems = function (idNumber) {
  //   console.log(idNumber)
  // },
  // explosion.getCategories = function() {
  //   return $.getJSON("categories.json")
  //     .then(function (res) {
  //       return res.categories
  //     })
  // },
  // explosion.getTypes = function() {
  //   return $.getJSON("types.json")
  //     .then(function (res) {
  //       return res.types
  //     })
  // },
  // explosion.getProducts = function() {
  //   return $.getJSON("products.json")
  //     .then(function (res) {
  //       return res.products
  //     })
  // }