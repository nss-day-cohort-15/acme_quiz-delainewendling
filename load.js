var Explosion = (function (explosion) {
  var categories;
  var types;
  var products;
  //This function uses promises to grab all of the data from the json files
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

