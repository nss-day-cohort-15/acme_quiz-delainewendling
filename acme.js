var Explosion = (function(explosion){

  //This function calls the correct function from separateProducts.js depending on the user's choice in the dropdown menu
  explosion.pickCategory = function(categories, types, products){
   $('.dropdown-menu li').click((e)=>{
      if(e.target.id === "fireworks"){
        console.log("fireworks")
        Explosion.fireworks(categories, types, products)
      } else if (e.target.id === "demolition") {
        console.log("demolition")
        Explosion.demolition(categories, types, products)
      } else {
        console.log("safety")
        Explosion.safety(categories, types, products)
      }
    })
  }
  //This function prints the correct items to the DOM based on the new array created in the separateProducts.js file
  explosion.addItems = function(categories, types, products, productArray){
    productArray.forEach((product)=>{
      $('#productContainer').append(`
        <div class="col-xs-4">
          <div class="spacer">
            <h4 class="category"> ${categories[types[product.type].category].name} </h4>
            <p class="type"> For ${types[product.type].name} use</p>
            <p class="productTitle"> ${product.name} </p>
            <p class="productDescription"> ${product.description} </p>
              `)
        })

  }

 return explosion
})(Explosion || {})
