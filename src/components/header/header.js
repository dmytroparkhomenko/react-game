import './header.css'
import logo from '../../logo.svg'

function Header() {
  return (
    <div className="header">
        <img src={logo} alt="logo_header" />
        <h1>React Game</h1>
    </div>
  );
}

export default Header;
