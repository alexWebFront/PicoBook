import './sidebar.css';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return <>
        <nav className="sidebar">
            <div className="sidebar__container content-container">
                <ul className="menu">
                    <li className="menu__item">
                        <NavLink to="/profile">
                            Профиль
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/dialogs">
                            Сообщения
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/news">
                            Новости
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/music">
                            Музыка
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/video">
                            Видео
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/settings">
                            Настройки
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}

export default Sidebar;