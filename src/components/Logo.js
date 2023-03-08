import logo from "../img/logo.jpg";

export default function Logo() {
  return (
    <a href="#home">
      <img className="round-image" src={logo} alt="logo" />
    </a>
  );
}
