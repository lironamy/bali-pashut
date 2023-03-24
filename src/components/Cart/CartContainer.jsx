import React, { useState, useEffect } from 'react';
import  CartItem from './CartItem';
import { useGlobalContext } from './context';
import { MdOutlineCookie } from 'react-icons/md';
import reducer from './reducer';
import Paypal from '../Paypal/paypal';



const CartContainer = () => {
  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const [toggleCart, setToggleCart] = useState(false);


  const handleAddToCart = (id) => {
    setCart(prevCart => {
      const updatedCart = new Map(prevCart);
      if (updatedCart.has(id)) {
        updatedCart.set(id, updatedCart.get(id) + 1);
      } else {
        updatedCart.set(id, 1);
      }
      return updatedCart;
    });
  };

  const totalCost = (cart) => {
    let total = 0;
  
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      const price = parseFloat(item.price);
      const amount = parseFloat(item.amount);
  
      total += price * amount;
    }
    
  
    return total;
  };  
  


  function clearCart(idOfProduct) {
    reducer('none', { type: "CLEAR_CART", payload: { id: idOfProduct } });

    document.getElementById('cart-content').remove();
    document.getElementById('cart-footer').remove();

    let html = `<h4 className='empty-cart'>כרגע ריק</h4>`;

    document.getElementById('empty-cart').innerHTML = html;
  }

  function fetchData(cart) {
    reducer('none', { type: "CLEAR_CART", payload: { cart } });
    
  }

  function handleClick() {
    setToggleCart(!toggleCart);
  }


  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>הסל שלך</h2>
          <h4 className='empty-cart'>כרגע ריק</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>הסל שלך</h2>
        {toggleCart && (
        <MdOutlineCookie color='#fff' fontSize={27} className="overlay__close" onClick={handleClick} />
        )}

        <div id='empty-cart'></div>
        </header>

        <div id='cart-content' >{cart.map(item => <CartItem key={item.id} onClick={handleAddToCart} {...item} />)}</div>

      <footer id='cart-footer' >
        <hr />
        <div>
          <h5 className='cart-total'>
            סך הכל <span>₪{totalCost(cart)}</span>
          </h5>
        </div>

        <Paypal />
        
        <button className='btn btn-hipster' onClick={() => clearCart(cart)}>
          למחוק סל
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;