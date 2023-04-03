import React, { Suspense } from 'react';
import { SubHeading } from '../../components';
import { CookiesCanvas } from "../canvas";




const Header = () => (
  <div className='app__header app__bgH app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="אפייה ביתית"/>
      <h1 className='app__header-h1'>באלי פשוט טעם של בית</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>- הכל התחיל במטרפה ולקקן - 100% אפייה ביתית ועבודת יד</p>
      <button type='button' className='menu-item-card-button'><a href="#menu">לתפריט שלנו</a></button>
    </div>
    <div className='cookie__div' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CookiesCanvas />
    </div>
    
  
    
  </div>
);

export default Header;
