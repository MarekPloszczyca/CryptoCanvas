import { Fragment, useEffect, useState } from "react";
import SliderImage from "./SliderImage";

interface Product {
  _id: string;
  image: string;
  name: string;
}

export default function Slider() {
  const [firstSlider, setFirstSlider] = useState([]);
  const [secondSlider, setSecondSlider] = useState([]);

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
    };
    fetchImage();
  }, []);
  return (
    <Fragment>
      <div className="overflow-hidden">
        <div className="flex relative justify-center">{firstSlider}</div>
        <div className="flex ">{secondSlider}</div>
      </div>
    </Fragment>
  );
}
