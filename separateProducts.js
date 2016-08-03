var Explosion = (function(explosion){
  //Functions each go through the products array and pull out the products that have a type related to fireworks, demolition, or safety. These products are pushed to a new array filled with only the desired items. Afterward, this array is used as the last argument in the addItems method to print the correct products to the screen.
  //*********Fireworks**********//
  explosion.fireworks = function(categories, types, products){
    var correctFireworks = [];
    $('#productContainer').html("")
    products.forEach((product)=>{
      if (product.type === 0 || product.type === 1){
         correctFireworks.push(product)
      }
    })
    explosion.addItems(categories, types, products, correctFireworks)
    }
    //*********Demolition**********//
    explosion.demolition = function(categories, types, products){
      var correctDemolition = [];
      $('#productContainer').html("")
      products.forEach((product)=>{
        if (product.type === 2 || product.type === 3){
           correctDemolition.push(product)
        }
      })
      explosion.addItems(categories, types, products, correctDemolition)
    }
    //*********Safety**********//
    explosion.safety = function(categories, types, products){
      var correctSafety = [];
      $('#productContainer').html("")
      products.forEach((product)=>{
        if (product.type === 4 || product.type === 5){
           correctSafety.push(product)
        }
      })
      explosion.addItems(categories, types, products, correctSafety)
    }
  return explosion
})(Explosion || {})

