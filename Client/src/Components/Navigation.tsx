import Logo from "../../Assets/Logo.jpg";
export default function Navigation() {
  return (
    <nav className="p-4 flex justify-between items-center">
      <img src={Logo} alt="CryptoCanvas"  className="w-24"/>
      <div>Menu icon</div>
    </nav>
  );
}
