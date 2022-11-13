import Slider from "react-slick";
import classes from "./Slider.module.scss";
export type SliderProps = {
  sliders: any[];
  show?: number;
};
export default function MySlider({ sliders, show }: SliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 2000,
    slidesToShow: show || 1,
    slidesToScroll: 1,

    responsive:
      show != 1
        ? [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ]
        : null,
  };
  return (
    <div className={classes.slider}>
      <Slider {...settings}>
        {sliders?.map((s: any, i: number) => (
          <div className={classes.slider_item} key={i}>
            {s}
          </div>
        ))}
      </Slider>
    </div>
  );
}
