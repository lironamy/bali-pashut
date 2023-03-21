import reducer from "./reducer";

export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE = 'REMOVE';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const DISPLAY_ITEMS = 'DISPLAY_ITEMS';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';
export const ADD_TO_CART = () => {
    reducer({type: ADD_TO_CART})
};
