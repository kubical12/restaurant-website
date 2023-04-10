import React from 'react';
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import './Laurels.css';
const AwardCard = ({award : {imgUrl , title , subtitle}}) => (
  <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="award " />
      <div className="app__laurels_awards-card">
      <p className="p__cormorant" style={{color : "#DCCA87"}}>{title}</p>
      <p className="p__cormorant" >{subtitle}</p>
      </div>
  </div>

)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headText__cormorant">
      </h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key ={award.title}/>)}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
