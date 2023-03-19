import React, {useState, useEffect} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GiShoppingCart} from 'react-icons/gi';
import {MdOutlineCookie} from 'react-icons/md';
import images from '../../constants/images';




const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
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

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app-logo' />
      </div>
      <div>
        <GiShoppingCart className='burger' color='#fff' fontSize={27} onClick={handleClick} />
        {toggleCart && (
          <div className="app__cart-smallscreen_overlay slide-left">
            <MdOutlineCookie color='#fff' fontSize={27} className="overlay__close" onClick={handleClick} />
          </div>
        )}
      </div>

      <ul className='app__navbar-links'>
        <li className='p__opensans p__W'><a href="#home">ראשי</a></li>
        <li className='p__opensans p__W'><a href="#about">אודות</a></li>
        <li className='p__opensans p__W'><a href="#menu">תפריט</a></li>
        <li className='p__opensans p__W'><a href="#awards">סל קניות</a></li>
        <li className='p__opensans p__W'><a href="#contact">צור קשר</a></li>
      </ul>
      
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu className='burger' color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>
        {toggleMenu && (

        <div className="app__navbar-smallscreen_overlay slide-bottom">
          <MdOutlineCookie color='#fff' fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans p__W'><a href="#home" onClick={() => setToggleMenu(false)}>ראשי</a></li>
              <li className='p__opensans p__W'><a href="#about" onClick={() => setToggleMenu(false)}>אודות</a></li>
              <li className='p__opensans p__W'><a href="#menu" onClick={() => setToggleMenu(false)}>תפריט</a></li>
              <li className='p__opensans p__W'><a href="#awards" onClick={() => setToggleMenu(false)}>סל קניות</a></li>
              <li className='p__opensans p__W'><a href="#contact" onClick={() => setToggleMenu(false)}>צור קשר</a></li>
            </ul>
        </div>
        )}
      </div>

      
    </nav>
  )
} 

export default Navbar;
