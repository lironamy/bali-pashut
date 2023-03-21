import React, { useState, useEffect } from 'react';
import  CartItem from './CartItem';
import { useGlobalContext } from './context';
import { MdOutlineCookie } from 'react-icons/md';

const CartContainer = () => {
  const { cart, totalCost, clearCart, setCart } = useGlobalContext();
  const cartArray = Array.from(cart.entries());
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

  function handleClick() {
    setToggleCart(!toggleCart);
  }

  useEffect(() => {
    if (toggleCart) {
      // Prevent scrolling when cart overlay is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling when cart overlay is closed
      document.body.style.overflow = 'auto';
    }
  }, [toggleCart]);

  if (cartArray.length === 0) {
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
        </header>
        <div>{cartArray.map(item => <CartItem key={id} onClick={handleAddToCart} {...item} />)}</div>
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            סך הכל <span>₪{totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button className='btn btn-hipster' onClick={clearCart}>
          למחוק סל
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
