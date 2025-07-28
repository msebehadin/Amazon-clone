import React from "react";
import {img} from '../../assets/img/data'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import classes from './carousel.module.css'
const carousel: React.FC = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
          >
              {img.map((imageItem) => {
        return <img src={imageItem}></img>
    })}
          </Carousel>
          <div className={classes.hero_img}></div>
    </div>
  );
};

export default carousel;
