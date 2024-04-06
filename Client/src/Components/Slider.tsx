import { Fragment, useEffect, useState, useRef } from "react";
import SliderImage from "./SliderImage";

interface Product {
  _id: string;
  image: string;
  name: string;
}

export default function Slider() {
  const [firstSlider, setFirstSlider] = useState([]);
  const [secondSlider, setSecondSlider] = useState([]);
  const [translate, setTranslate] = useState(0);
  const firstSlideRow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const image = await fetch("http://localhost:8000/");
      const response = await image.json();
      const firstSlice = response.slice(0, 10).map((item: Product) => {
        return <SliderImage key={item._id} src={item.image} alt={item.name} />;
      });
      const secondSlice = response.slice(10, 20).map((item: Product) => {
        return <SliderImage key={item._id} src={item.image} alt={item.name} />;
      });
      setFirstSlider(firstSlice);
      setSecondSlider(secondSlice);
      setTranslate((current) => current + 10);
    };
    fetchImage();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslate((current) => current + 320);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Fragment>
      <div className="overflow-hidden">
        <div
          ref={firstSlideRow}
          className="flex relative duration-1000 ease-linear"
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {firstSlider}
        </div>
        <div
          className="flex relative duration-1000 ease-linear justify-end"
          style={{ transform: `translateX(${translate}px)` }}
        >
          {secondSlider}
        </div>
      </div>
    </Fragment>
  );
}
