import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';

const Footer = () => (
  <div className="app__footer section__padding-footer" id="login">
    <div className="app__footer-links_logo">
      <div>
        <a href="#home"><img src={images.gericht} alt="footer_logo" /></a>
        
      </div>
      <div>
        <p> &copy; 2023 Liron Lin Avraham</p>
      </div>
    </div>
    <div className="app__footer-links_icons">
      <a href="https://www.facebook.com/maayan.levi.90?mibextid=LQQJ4d" target="_blank"><FiFacebook/></a>
      <a href="https://www.instagram.com/maayanlevixd/?igshid=YmMyMTA2M2Y%3D" target="_blank"><FiInstagram /></a>
      
    </div>

    

  </div>
);

export default Footer;