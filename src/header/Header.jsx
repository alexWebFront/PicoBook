import logo from "./../image/logo/vk-logo-header.png";

const Header = () => {
    return (
        <div className="header">
            <ul className="header__list">
                <li className="header__list-item header__list--logo ">
                    <img src={logo} alt="logo" />
                    <span>ВКОНТАКТЕ</span>
                </li>
                <li className="header__list-item header__list--search ">
                    <input type="search" placeholder="Поиск" />
                    <button className="btn-search">Поиск</button>
                </li>
                <li className="header__list-item header__list--service ">
                    service popup
                </li>
            </ul>

        </div>
    )
}

export default Header;