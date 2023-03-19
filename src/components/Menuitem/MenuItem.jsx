import React from 'react';


const MenuItem = ({ title, price, tags, imgUrl }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      {imgUrl && (
        <div className="app__menuitem-img">
          
          <img src={imgUrl} alt="menu__img" />
         
        </div>
      )}
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
      <div className="app__menuitem-dash" />

      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
