import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { MdOutlineCookie } from 'react-icons/md';
import reducer from './reducer';
import Paypal from '../Paypal/paypal';


const CartContainer = () => {
  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const [toggleCart, setToggleCart] = useState(false);
  const [total, setTotal] = useState(0);

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

  useEffect(() => {
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
    setTotal(totalCost(cart));
  }, [cart]);

  function clearCart(idOfProduct) {
    reducer('none', { type: "CLEAR_CART", payload: { id: idOfProduct } });

    document.getElementById('cart-content').remove();
    document.getElementById('cart-footer').remove();
    document.getElementById('payPal').remove();
    document.getElementById('hr').remove();
    document.getElementById('M__B').remove();

    let html = `<h4 className='empty-cart'>כרגע ריק</h4>`;

    document.getElementById('empty-cart').innerHTML = html;
  }

  function handleClick() {
    setToggleCart(!toggleCart);
  }

  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header className='cart-header'>
          <h2>הסל שלך</h2>
          <h4 className='empty-cart'>כרגע ריק</h4>
        </header>
        <div>
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div >
      </section>
    );
  }

  return (
    <section className='cart'>
      <header className='cart-header'>
        <h2>הסל שלך</h2>
        {toggleCart && (
        <MdOutlineCookie color='#fff' fontSize={27} className="overlay__close" onClick={handleClick} />
        )}

        <div id='empty-cart'></div>
        </header>

        <div id='cart-content' >{cart.map(item => <CartItem key={item.id} onClick={handleAddToCart} {...item} />)}</div>
        <hr id='hr' />
      <footer id='cart-footer' className='cart-footer' >
        
        <div>
          <h5 className='cart-total'>
          ₪ סך הכל <span id='total'>{total}</span>
          </h5>
        </div>
        <button className='menu-item-card-buttonC' onClick={() => clearCart(cart)}>
          למחוק סל
        </button>
      </footer>
      <div className='flex__center M__B' id='M__B' >
          איסוף עצמי בלבד
        </div>
      <div className='payPal' id='payPal'>
        <Paypal />
      </div>


      <div>
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div >
    </section>
    
  );
};

export default CartContainer;