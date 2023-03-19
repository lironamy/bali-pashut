import React from 'react';
import { SubHeading } from '../../components';
import { data } from '../../constants';



const SpecialMenu = () => (

  <div className="app__specialMenu app__bgE  flex__center area section__padding" id="menu">
    <div className="snowflakes" aria-hidden="true">
        <div className="app__specialMenu-title">
          <SubHeading title="תפריט" />
          <h1 className="headtext__cormorant">העוגיות שלנו</h1>
        </div>
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_cocktails  flex__center">
            <div className="app__specialMenu_menu_items">
              {data.cocktails.map((cocktails) => 
                <MenuItemImage cocktails={cocktails} key={cocktails.title} />
              )}
            </div>
          </div>
          
        </div>
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
    </div>
  
  
);

const MenuItemImage = ({ cocktails: { imgUrl, title, price, subtitle, subtitleB } }) => (
  <div className="menu-item-card">
    <div className="menu-item-card-img-container">
      <img src={imgUrl} alt="cocktail" className="menu-item-card-img" />
    </div>
    <div className="menu-item-card-content">
      <div className="menu-item-card-text-container">
        <p className="menu-item-card-title">{title}</p>
        <p className="menu-item-card-titleS">{subtitle}</p>
        <p className="menu-item-card-titleB">{subtitleB}</p>
        <p className="menu-item-card-price">{price}</p>
        <button className="menu-item-card-button">הוספה לסל</button>

      </div>
    </div>
  </div>
);


export default SpecialMenu;