import React from 'react';

import './AboutUs.css';
import { images} from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="" className='spoon__img'/>
        <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, ipsam!</p>
        <button type="button" className="custom__button" >Know more</button>
      </div>
      <div className="app__aboutus-content_knife flexx__center">
        <img src={images.knife} alt="" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">our history</h1>
        <img src={images.spoon} alt="" className='spoon__img'/>
        <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, ipsam!</p>
        <button type="button" className="custom__button" >Know more</button>

      </div>
      
    </div>
    AboutUs
  </div>
);

export default AboutUs;
