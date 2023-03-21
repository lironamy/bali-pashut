import React from 'react';
import { useGlobalContext } from './context';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const CartItem = ({ id, imgUrl, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();
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
