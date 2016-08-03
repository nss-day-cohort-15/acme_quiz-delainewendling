var Explosion = (function(explosion){
  var correctProducts = [];
  explosion.fireworks = function(categories, types, products){
    products.forEach((product)=>{
      if (product.type === 0 || product.type === 1){
         correctProducts.push(product)
      }
    })
    correctProducts.forEach((product)=>{
      $('#productContainer').append(`
        <div class="col-xs-4">
          <div class="spacer">
            <h4 class="category"> Category: ${categories[0].name} </h4>
            <p class="type"> Type: ${product.type}</p>
            <p class="productTitle"> ${product.name} </p>
            <p class="productDescription"> ${product.description} </p>
              `)
        })
    }
    explosion.demolition = function(categories, types, products){
    products.forEach((product)=>{
      if (product.type === 2 || product.type === 3){
         correctProducts.push(product)
      }
    })
    correctProducts.forEach((product)=>{
      $('#productContainer').append(`
        <div class="col-xs-4">
          <div class="spacer">
            <h4 class="category"> Category: ${categories[1].name} </h4>
            <p class="type"> Type: ${product.type}</p>
            <p class="productTitle"> ${product.name} </p>
            <p class="productDescription"> ${product.description} </p>
              `)
        })
    }
    explosion.safety = function(categories, types, products){
    products.forEach((product)=>{
      if (product.type === 4 || product.type === 5){
         correctProducts.push(product)
      }
    })
    correctProducts.forEach((product)=>{
      $('#productContainer').append(`
        <div class="col-xs-4">
          <div class="spacer">
            <h4 class="category"> Category: ${categories[2].name} </h4>
            <p class="type"> Type: ${product.type}</p>
            <p class="productTitle"> ${product.name} </p>
            <p class="productDescription"> ${product.description} </p>
              `)
        })
    }
  return explosion
})(Explosion || {})

