import React from 'react';
import images from '../../constants/images';
import { SubHeading } from '../../components';

const AboutUs = () => (
  <div className="app__bg ">
    <div className='app__aboutus flex__center section__padding' id='about'>
      <div className='app__aboutus-content  flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>באלי פשוט</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p  className='p__opensans'>אני משתמשת רק במצרכים הטריים והאיכותיים ביותר בכל המוצרים שלי, בין אם אתם מחפשים עוגיה קלאסית או עוגה מעוצבת, יש לי משהו שיהפוך את היום שלכם ליותר מתוק</p>
        </div>
        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="about_knife" />
        </div>
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant '>באלי פשוט</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p  className='p__opensans'>התשוקה שלי לאפייה התחילה כתחביב, אך הפכה מהר מאוד לדרך עבורי לחלוק את האהבה שלי לפינוקים טעימים עם אחרים. אפייה היא לא רק להכין משהו מתוק, אלא גם להביא שמחה לחייהם של אנשים</p>
        </div>
        
      </div>
    </div>
  </div>
);

export default AboutUs;
