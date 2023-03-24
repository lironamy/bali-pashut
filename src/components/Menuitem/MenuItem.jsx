import React from 'react';
import { data } from '../../constants';
import  reducer  from '../Cart/reducer';
import { useState } from 'react';
import ReactiveButton from 'reactive-button';



const MenuItem = () => {

  function addToCart(idOfProduct) {
    reducer('none', { type: 'ADD_TO_CART', payload: { id: idOfProduct } });
  }

  return data.cocktails.map(cocktail => {

    const { id, imgUrl, title, subtitle, subtitleB, price } = cocktail;

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
            <button className="menu-item-card-button" onClick={() => { addToCart(id) }}>הוספה לסל</button>
          </div>
        </div>
      </div>
    );
  });
}

export default MenuItem;

