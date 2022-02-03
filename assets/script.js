
console.log('JavaScript code has loaded!')
let yourName = "Leigh Ryan" 
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // Total

const gbPlusBtn = document.querySelector ('#add-gb')
const Gingerbreadscr = document.querySelector ('#qty-gb')
const gbMinusBtn = document.querySelector ('#minus-gb')

const ccPlusBtn = document.querySelector ('#add-cc')
const ChocolateChipscr = document.querySelector ('#qty-cc')
const ccMinusBtn = document.querySelector ('#minus-cc')

const SugarPlusBtn = document.querySelector ('#add-sugar')
const SugarSprinklescr = document.querySelector ('#qty-sugar')
const SugarMinusBtn = document.querySelector ('#minus-sugar')


// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb

// Code to update name display
credit.textContent = 'Created by Leigh Ryan'

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn. addEventListener("click", function(e){
  gb++ 
  Gingerbreadscr.innerHTML = gb
   })

   ccPlusBtn. addEventListener("click", function(e){
    cc++ 
    ChocolateChipscr.innerHTML = cc
     })

     SugarPlusBtn. addEventListener("click", function(e){
      sugar++ 
      SugarSprinklescr.innerHTML = sugar 
       })

       gbMinusBtn. addEventListener("click", function(e){
        gb-- 
        Gingerbreadscr.innerHTML = gb
         })
      
         ccMinusBtn. addEventListener("click", function(e){
          cc--
          ChocolateChipscr.innerHTML = cc
           })
      
           SugarMinusBtn. addEventListener("click", function(e){
            sugar--
            SugarSprinklescr.innerHTML = sugar 
             })
       
// console.log('Gingerbread + button was clicked!')

// let decreaseBtn = document.querySelector("#quantity-down")
// let increaseBtn = document.querySelector("#quantity-up")

// function updateQuanity(displayQuantity){
// let quantity = document.querySelector(".total-quanity")
//  quanity.innerHTML = displayQuantity
// }

// let quantity = 1 

// decreaseBtn. addEventListener("click", function(e){
//  if(quantity > 0){
//      quantity--
//  }else{
//      window.alert("nothing in the cart")
//  }
//  updateQuantity('Quantity: ${quantity}')
// })
// increaseBtn.addEventListener("click", function(e){

//  updateQuantity('Quantity: ${++quantity}')
// })
// // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

// let decreaseBtn = document.querySelector("#quantity-down")
// let increaseBtn = document.querySelector("#quantity-up")

// function updateQuanity(displayQuantity){
//  let quantity = document.querySelector(".total-quanity")
//  quanity.innerHTML = displayQuantity
// }

// let quantity = 1 

// decreaseBtn. addEventListener("click", function(e){
//  if(quantity > 0){
//      quantity--
//  }else{
//      window.alert("nothing in the cart")
//  }
//  updateQuantity('Quantity: ${quantity}')
// })
// increaseBtn.addEventListener("click", function(e){

//  updateQuantity('Quantity: ${++quantity}')
// })

// // TODO: Hook up event listeners for the rest of the buttons
// Gingerbread = gb 
// let decreaseBtn = document.querySelector("#quantity-down")
// let increaseBtn = document.querySelector("#quantity-up")

// function updateQuanity(displayQuantity){
//  let quantity = document.querySelector(".total-quanity")
//  quanity.innerHTML = displayQuantity
// }

// let quantity = 1 

// decreaseBtn. addEventListener("click", function(e){
//  if(quantity > 0){
//      quantity--
//  }else{
//      window.alert("nothing in the cart")
//  }
//  updateQuantity('Quantity: ${quantity}')
// })
// increaseBtn.addEventListener("click", function(e){

//     updateQuantity('Quantity: ${++quantity}'
// })
