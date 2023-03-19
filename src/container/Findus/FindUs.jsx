
import React from 'react';

import { SubHeading } from '../../components';
import { CakeCanvas } from "../canvas";


const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="צרו קשר" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>כתובת</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">החייל האלמוני 7 ראשון לציון</p>
        <p className="p__cormorant" style={{ color: '#rgb(255 255 255)', margin: '2rem 0' }}>יצירת קשר</p>
        <p className="p__opensans">מספר נייד: 050-2112059</p>
        <p className="p__cormorant" style={{ color: '#rgb(255 255 255)', margin: '2rem 0' }}>שעות פתיחה</p>

        <p className="p__opensans">ימי ראשון עד ימי חמישי: 10:00-22:00</p>
        <p className="p__opensans">ניתן להזמין באיסוף עצמי בלבד</p>
      </div>
    </div>

    <div className='cookie__div'>
      <CakeCanvas />
    </div>
  </div>
);

export default FindUs;