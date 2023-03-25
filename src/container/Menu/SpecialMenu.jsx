import React from 'react';
import { SubHeading } from '../../components';
import {MenuItem} from '../../components';



const SpecialMenu = () => (

  <div className="app__specialMenu app__bgE  flex__center area section__padding" id="menu">
        <div className="app__specialMenu-title">
          <SubHeading title="תפריט" />
          <h1 className="headtext__cormorant">העוגיות שלנו</h1>
        </div>
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_cocktails  flex__center">
            <div className="app__specialMenu_menu_items">
              <MenuItem />
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



export default SpecialMenu;