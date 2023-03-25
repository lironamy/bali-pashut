import React, { useState } from 'react';
import { data } from '../../constants';
import reducer from '../Cart/reducer';
import ReactiveButton from 'reactive-button';

const MenuItem = () => {
  const [loadingState, setLoadingState] = useState({});

  const onClickHandler = (id) => {
    setLoadingState(prevState => ({
      ...prevState,
      [id]: 'loading'
    }));

    // send an HTTP request
    setTimeout(() => {
      setLoadingState(prevState => ({
        ...prevState,
        [id]: 'success'
      }));
    }, 2000);
  };

  function addToCart(idOfProduct) {
    reducer('none', { type: 'ADD_TO_CART', payload: { id: idOfProduct } });
  }

  return data.cocktails.map(cocktail => {
    const { id, imgUrl, title, subtitle, subtitleB, price } = cocktail;
    const buttonState = loadingState[id] || 'idle';

    return (
      <div className="menu-item-card" key={id}>
        <div className="menu-item-card-img-container">
          <img src={imgUrl} alt="cocktail" className="menu-item-card-img" />
        </div>
        <div className="menu-item-card-content">
          <div className="menu-item-card-text-container">
            <p className="menu-item-card-title">{title}</p>
            <p className="menu-item-card-titleS">{subtitle}</p>
            <p className="menu-item-card-titleB">{subtitleB}</p>
            <p className="menu-item-card-price">₪{price}</p>
            <ReactiveButton outline rounded size="large" color="primary"
              buttonState={buttonState}
              idleText="הוספה לסל"
              loadingText="מוסיף"
              successText="✔"
              onClick={() => {
                onClickHandler(id);
                addToCart(id);
              }}
            />
          </div>
        </div>
      </div>
    );
  });
};

export default MenuItem;
