import type { FC } from "react";
import { img } from "../../assets/img/data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css";

const CarouselView: FC = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItem) => (
          <img key={imageItem} src={imageItem} alt="" />
        ))}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
};

export default CarouselView;
