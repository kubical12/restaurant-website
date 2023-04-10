import React from 'react';
import { images} from '../../constants' ;
// import { SubHeading}  from '../../constants' ;
// import "./Header.css"
const SubHeading =({title}) => (
  <div style={{marginBottom : '1rem'  , color: "white"}}>
      <p className='p__comorant'  >{title}</p>
      <img src={images.spoon} alt="" className='spoon__img' />
    
  </div>

);

export default SubHeading;
