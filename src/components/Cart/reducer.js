import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    DISPLAY_ITEMS,
    ADD_TO_CART,
  } from './actions';
  const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
      return { ...state, cart: new Map() };
    }
    if (action.type === REMOVE) {
      const newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };
    }
    if (action.type === INCREASE) {
      const itemId = action.payload.id;
      const newCart = new Map(state.cart);
      const item = newCart.get(itemId);
      const newItem = { ...item, amount: item.amount + 1 };
      newCart.set(itemId, newItem);
      return { ...state, cart: newCart };
    }
    if (action.type === DECREASE) {
      const itemId = action.payload.id;
      const newCart = new Map(state.cart);
      const item = newCart.get(itemId);
      if (item.amount === 1) {
        newCart.delete(itemId);
        return { ...state, cart: newCart };
      }
      const newItem = { ...item, amount: item.amount - 1 };
      newCart.set(itemId, newItem);
      return { ...state, cart: newCart };
    }
    if (action.type === DISPLAY_ITEMS) {
      const newCart = new Map(action.payload.cart.data.cocktails.map((item) => [item.id, item]));
      return { ...state, loading: false, cart: newCart };
    }
    if (action.type === ADD_TO_CART) {
      const itemId = action.payload.id;
      const newCart = new Map(state.cart);
      const item = data.cocktails.find((cocktail) => cocktail.id === itemId);
      if (!newCart.has(itemId)) {
        newCart.set(itemId, { ...item, amount: 1 });
      } else {
        const existingItem = newCart.get(itemId);
        newCart.set(itemId, { ...existingItem, amount: existingItem.amount + 1 });
      }
      return { ...state, cart: newCart };
    }
    
  
    throw new Error('no matching action type');
  };
  
  export default reducer;
  