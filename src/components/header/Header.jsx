import './header.css';
import logo from "../../image/logo/picom-logo-header.svg";

const Header = () => {
    return <>
        <div className="header">
            <div className="header__container">
                <ul className="header__list">
                    <li className="header__item header__logo ">
                        <img src={logo} alt="logo" />
                    </li>
                    <li className="header__item header__name ">
                        <p>Pico<span>Book</span></p>
                    </li>
                    <li className="header__item popup header__popup ">
                        service popup
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default Header;