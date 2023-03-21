// import {
//     CLEAR_CART,
//     REMOVE,
//     INCREASE,
//     DECREASE,
//     DISPLAY_ITEMS,
//     ADD_TO_CART,
//   } from './actions';

import data from '../../constants/data';



  const reducer = (state, action) => {

    
    if(!localStorage.getItem('cart')) {
      localStorage.setItem('cart', '[]');
    }

    let newCart = JSON.parse(localStorage.getItem('cart'));

    const itemId = action.payload.id;
    const item = data.cocktails.find((cocktail) => cocktail.id === itemId);

    if (action.type === "CLEAR_CART") {

      localStorage.clear();

      return 0;
    }

    if (action.type === "REMOVE") {
      
      newCart = newCart.filter((item) => {
        if(item.id !== itemId) {
          return item;
        }
      });

      localStorage.setItem('cart', JSON.stringify(newCart));

      return 0;
    }

    if (action.type === "INCREASE") {
      newCart = newCart.filter((item) => {
        if(item.id !== itemId) {
          return item;
        }
        else {
          item.amount = item.amount + 1;
          return item;
        }
      });

      localStorage.setItem('cart', JSON.stringify(newCart));
      
      return 0;
    }

    if (action.type === "DECREASE") {
      newCart = newCart.filter((item) => {
        if(item.id !== itemId) {
          return item;
        }
        else {
          item.amount = item.amount - 1;

          if(item.amount === 0) {
            return null;
          }

          return item;
        }
      });

      localStorage.setItem('cart', JSON.stringify(newCart));
      
      return 0;
    }

    if (action.type === "ADD_TO_CART") {
  
      let b = true;

      for(let product of newCart) {
        if(product.id === itemId) {

          let newAmount = product.amount + 1;
          let itemToUpdate; 
   
          newCart = newCart.filter((item) => {
            if(item.id !== itemId) {
              return item;
            }
            else {
              itemToUpdate = item;
            }
          });

          newCart.push({ ...itemToUpdate, amount: newAmount });

          b = false;
        }
      }

      if (b === true) {
        newCart.push({ ...item, amount: 1 });
      } 

      localStorage.setItem('cart', JSON.stringify(newCart));

      return 0;
    }
    
  

    throw new Error('no matching action type');
  };
  
  export default reducer;
  