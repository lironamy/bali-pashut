import React, { useState, useEffect } from 'react';
import  CartItem from './CartItem';
import { useGlobalContext } from './context';
import { MdOutlineCookie } from 'react-icons/md';
import reducer from './reducer';




const CartContainer = () => {
  const { cart, totalCost, setCart } = useGlobalContext();
  const cartArray = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
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

  function clearCart(idOfProduct) {
    reducer('none', { type: "CLEAR_CART", payload: { id: idOfProduct } });
    
  }
  function fetchData(cart) {
    reducer('none', { type: "CLEAR_CART", payload: { cart } });
    
  }

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
        <div>{cartArray.map(item => <CartItem key={item.id} onClick={handleAddToCart} {...item} />)}</div>
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            סך הכל <span>₪{totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button className='btn btn-hipster' onClick={() => clearCart(cartArray)}>
          למחוק סל
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
