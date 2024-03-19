interface Props {
  src: string;
  alt: string;
}

export default function SliderImage(props: Props) {
  return (
    <img src={props.src} alt={props.alt} className="m-2 w-52 rounded-xl" />
  );
}
