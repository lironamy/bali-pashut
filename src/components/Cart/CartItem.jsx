import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import reducer from './reducer';
import { getTotals } from './utils';
import CartContainer from './CartContainer';

const CartItem = ({ id, imgUrl, title, price, amount }) => {
  

  function remove(idOfProduct) {
    reducer('none', { type: 'REMOVE', payload: { id: idOfProduct } });
    
  }

  function increase(idOfProduct) {
    reducer('none', { type: 'INCREASE', payload: { id: idOfProduct } });
  }

  function decrease(idOfProduct) {
    reducer('none', { type: 'DECREASE', payload: { id: idOfProduct } });
  }

  return (
    <article className='cart-item'>
      <img src={imgUrl} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>₪{price}</span>
        <button className='remove-btn' onClick={() => remove(id)}>
          להסיר
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => increase(id)}>
          <FaChevronUp className='amount-icon' />
        </button>
        <span className='amount'>{amount}</span>
        <button className='amount-btn' onClick={() => decrease(id)}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
