import './header.css';
import logo from "./../image/logo/picom-logo-header.svg";

const Header = () => {
    return (
        <div className="header header-container">
            <ul className="header__list menu">
                <li className="menu__item menu__item--logo ">
                    <img src={logo} alt="logo" />
                </li>
                <li className="menu__item menu__item--name ">
                    <p>Pico<span>Book</span></p>
                </li>
                <li className="menu__item menu__item--service ">
                    service popup
                </li>
            </ul>
        </div>
    )
}

export default Header;