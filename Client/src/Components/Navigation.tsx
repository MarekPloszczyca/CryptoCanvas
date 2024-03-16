import Logo from "../../Assets/Logo.jpg";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      const images = await fetch("http://localhost:8000/message");
      const res = await images.json();
      const answer = await res;
      setMessage(answer.message)
    };
    fetchImages();
  }, []);

  return (
    <nav className="p-4 flex justify-between items-center">
      <img src={Logo} alt="CryptoCanvas" className="w-24" />
      <div>{message}</div>
    </nav>
  );
}
