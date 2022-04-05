import './sidebar-menu.css';

const SidebarMenu = () => {
    return (
        <div className="sidebar-menu">
            <ul className="sidebar-menu__list">
                <li className="sidebar-menu__item">Profile</li>
                <li className="sidebar-menu__item">News</li>
                <li className="sidebar-menu__item">Messages</li>
                <li className="sidebar-menu__item">Music</li>
                <li className="sidebar-menu__item">Video</li>
            </ul>
        </div>
    )
}

export default SidebarMenu;