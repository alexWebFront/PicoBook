import './header.css';
import logo from "../../image/logo/picom-logo-header.svg";

const Header = () => {
    return <>
        <div className="header">
            <div className="header__container">
                <ul className="header__list header__menu">
                    <li className="header__item header__item-logo ">
                        <img src={logo} alt="logo" />
                    </li>
                    <li className="header__item header__item-name ">
                        <p>Pico<span>Book</span></p>
                    </li>
                    <li className="header__item header__item-service ">
                        service popup
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default Header;