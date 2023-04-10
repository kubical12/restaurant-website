import React from 'react';
import {SubHeading } from '../../components';
import { images } from '../../constants' ;
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding " id="home">
    <div className='app__wrapper_info'>
     <SubHeading title="chase the new flavour " />
     <h1 className='app__header-h1'>key to find dining</h1>
     <p className='p__opensans' style={{margin:"2rem 0"}}>lorem 20</p>
     <button type='button' className='custom__button'> explore menu </button>
    </div>
    <div className="app__wrapper_img">
    <img src={images.welcome} alt="" />
    </div>
    
  </div>
);

export default Header;
