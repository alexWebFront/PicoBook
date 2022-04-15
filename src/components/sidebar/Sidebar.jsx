import './sidebar.css';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return <>
        <nav className="sidebar">
            <div className="sidebar__container content-container">
                <ul className="menu">
                    <li className="menu__item">
                        <NavLink to="/profile">
                            <span>Профиль</span>
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/dialogs">
                            <span>Сообщения</span>
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/news">
                            <span>Новости</span>
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/music">
                            <span>Музыка</span>
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/video">
                            <span>Видео</span>
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/settings">
                            <span>Настройки</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}

export default Sidebar;