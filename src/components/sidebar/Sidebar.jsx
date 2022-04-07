import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return <>
        <nav className="sidebar sidebar-container content-container border-radius">
            <ul className="sidebar-menu">
                <li className="sidebar-menu__item">
                    <NavLink to="/profile">
                        <span>Профиль</span>
                    </NavLink>
                </li>
                <li className="sidebar-menu__item">
                    <NavLink to="/dialogs">
                        <span>Сообщения</span>
                    </NavLink>
                </li>
                <li className="sidebar-menu__item">
                    <NavLink to="/news">
                        <span>Новости</span>
                    </NavLink>
                </li>
                <li className="sidebar-menu__item">
                    <NavLink to="/music">
                        <span>Музыка</span>
                    </NavLink>
                </li>
                <li className="sidebar-menu__item">
                    <NavLink to="/video">
                        <span>Видео</span>
                    </NavLink>
                </li>
                <li className="sidebar-menu__item">
                    <NavLink to="/settings">
                        <span>Настройки</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </>
}

export default Sidebar;