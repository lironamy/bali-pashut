import React, { useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import reducer from './reducer';
import { getTotals } from './utils';
import CartContainer from './CartContainer';

const CartItem = ({ id, imgUrl, title, price, amount }) => {

  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  console.log(cart);
  
  
  function remove(idOfProduct) {
    reducer('none', { type: 'REMOVE', payload: { id: idOfProduct } });

    let currentAmount = 0;
    let currentCart = JSON.parse(localStorage.getItem('cart'));
    let total = document.getElementById('total');

    currentCart.forEach(item => {
      if(item.id === idOfProduct) {
        currentAmount = item.amount;
      }
    });

    if(localStorage.getItem('cart') === '[]') {
      document.getElementById('cart-content').remove();
      document.getElementById('cart-footer').remove();
      document.getElementById('payPal').remove();
      document.getElementById('hr').remove();
      document.getElementById('M__B').remove();

      let html = `<h4 className='empty-cart'>כרגע ריק</h4>`;

      document.getElementById('empty-cart').innerHTML = html;
    }



    document.getElementById('cart-item-' + idOfProduct).remove();
    total.innerHTML = getTotals(currentCart).totalCost;
  }

  function increase(idOfProduct) {
    reducer('none', { type: 'INCREASE', payload: { id: idOfProduct } });
  
    let currentAmount;
    let currentCart = JSON.parse(localStorage.getItem('cart'));
    let total = document.getElementById('total');
  
    currentCart.forEach(item => {
      if(item.id === idOfProduct) {
        currentAmount = item.amount;
      }
    });
  
    total.innerHTML = getTotals(currentCart).totalCost;
  
    document.getElementById('amount-' + idOfProduct).innerHTML = currentAmount;
  }
  
  
  

  function decrease(idOfProduct) {
    reducer('none', { type: 'DECREASE', payload: { id: idOfProduct } });


    let currentAmount = 0;
    let currentCart = JSON.parse(localStorage.getItem('cart'));
    let total = document.getElementById('total');


    currentCart.forEach(item => {
      if(item.id === idOfProduct) {
        currentAmount = item.amount;
      }
    });

    if(currentAmount === 0) {
      remove(idOfProduct);
    }
    else{
      document.getElementById('amount-' + idOfProduct).innerHTML = currentAmount;
    }

    total.innerHTML = getTotals(currentCart).totalCost;


    if(localStorage.getItem('cart') === '[]') {
      document.getElementById('cart-content').remove();
      document.getElementById('cart-footer').remove();
      document.getElementById('payPal').remove();
      document.getElementById('hr').remove();
      document.getElementById('M__B').remove();

      let html = `<h4 className='empty-cart'>כרגע ריק</h4>`;

      document.getElementById('empty-cart').innerHTML = html;
    }
  }

  
  

  return (
    <article id={`cart-item-${id}`} className='cart-item'>
      <img src={imgUrl} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>₪{price}</span>
        <button className='remove-btn' onClick={() => remove(id)}>
          X
        </button>
      </div>
      <div>
        <button id='amount-btn-more' className='amount-btn'
         onClick={() => increase(id)}>
          <FaChevronUp className='amount-icon' />
        </button>
        <span id={`amount-${id}`} className='amount'>{amount}</span>
        <button id='amount-btn-less' className='amount-btn' onClick={() => decrease(id)}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
